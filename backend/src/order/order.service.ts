import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { CreateOrderDto } from './dto/order.dto';
import { TakenSeatsEception } from 'src/exceptions/seats-exists.exception';
import { OrderPostgresService } from 'src/repository/order.repository/orderPostgres.service';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderPostgresService) {}

  async createOrder(order: CreateOrderDto) {
    const { tickets } = order;

    const items = tickets.map(async (ticket) => {
      const { session, row, seat } = ticket;
      const takenSeats = `${row}:${seat}`;
      ticket.id = faker.string.uuid();

      const targetSession = await this.orderRepository.getSEssion(session);
      if (targetSession.taken.includes(takenSeats)) {
        throw new TakenSeatsEception();
      }
      if (!targetSession.taken) {
        targetSession.taken = takenSeats;
      } else {
        targetSession.taken = `${targetSession.taken},${takenSeats}`;
      }
      await this.orderRepository.updatefilm(session, targetSession.taken);
      return ticket;
    });
    return {
      total: items.length,
      items: await Promise.all(items),
    };
  }
}
