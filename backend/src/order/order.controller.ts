import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { TakenSeatsExceptionFilter } from '../filters/taken-seats.filter';

@Controller('order')
@UseFilters(TakenSeatsExceptionFilter)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post()
  async createOrder(@Body() reqBody: CreateOrderDto) {
    const result = await this.orderService.createOrder(reqBody);
    return result;
  }
}
