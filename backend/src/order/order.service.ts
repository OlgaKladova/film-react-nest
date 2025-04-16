import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/repository/order.repository/order.repository';
import { faker } from '@faker-js/faker';
import { FilmsRepository } from 'src/repository/films.repository/films.repository';
import { CreateOrderDto } from './dto/order.dto';
import { TakenSeatsEception } from 'src/exceptions/seats-exists.exception';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly filmRepository: FilmsRepository,
  ) {}

  async createOrder(order: CreateOrderDto) {
    const { tickets } = order;

    const items = tickets.map(async (ticket) => {
      const { film, session, row, seat } = ticket;
      const takenSeats = `${row}:${seat}`;
      ticket.id = faker.string.uuid();

      const targetSession = await this.orderRepository.getSEssion(
        film,
        session,
      );

      if (targetSession.schedule[0].taken.includes(takenSeats)) {
        throw new TakenSeatsEception();
      }
      await this.orderRepository.updatefilm(film, session, takenSeats);
      return ticket;
    });
    return {
      total: items.length,
      items: await Promise.all(items),
    };
  }
}
