import { HttpException, HttpStatus } from '@nestjs/common';

export class TakenSeatsEception extends HttpException {
  constructor() {
    super('Seats are already taken', HttpStatus.BAD_REQUEST);
  }
}
