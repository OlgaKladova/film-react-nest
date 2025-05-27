import { HttpException, HttpStatus } from '@nestjs/common';

export class TakenSeatsException extends HttpException {
  constructor() {
    super('Seats are already taken', HttpStatus.BAD_REQUEST);
  }
}
