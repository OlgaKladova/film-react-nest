//TODO реализовать DTO для /orders
export class CreateOrderDto {
  email: string;
  phone: string;
  tickets: TicketDto[];
}

class TicketDto {
  film: string;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
}
