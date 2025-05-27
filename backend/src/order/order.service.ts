import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CreateOrderDto } from './dto/order.dto';
import { TakenSeatsException } from '../exceptions/seats-exists.exception';
import { OrderPostgresService } from '../repository/order.repository/orderPostgres.service';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderPostgresService) {}

  async createOrder(order: CreateOrderDto) {
    const { tickets } = order;

    const items = tickets.map(async (ticket) => {
      const { session, row, seat } = ticket;
      const takenSeats = `${row}:${seat}`;
      ticket.id = faker.string.uuid();

      const targetSession = await this.orderRepository.getSession(session);
      if (targetSession.taken.includes(takenSeats)) {
        throw new TakenSeatsException();
      }
      if (!targetSession.taken) {
        targetSession.taken = takenSeats;
      } else {
        targetSession.taken = `${targetSession.taken},${takenSeats}`;
      }
      await this.orderRepository.updateFilm(session, targetSession.taken);
      return ticket;
    });
    return {
      total: items.length,
      items: await Promise.all(items),
    };
  }
}
