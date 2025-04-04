//TODO реализовать DTO для /orders
export class CreateOrderDto {
  email: string;
  phone: string;
  tickets: CreateTicketDto[];
}

export class CreateTicketDto {
  film: string;
  session: string;
  daytime: string;
  row: number;
  seat: number;
  price: number;
  id?: string;
}
