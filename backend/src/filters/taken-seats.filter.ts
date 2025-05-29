import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { TakenSeatsException } from '../exceptions/seats-exists.exception';

@Catch(TakenSeatsException)
export class TakenSeatsExceptionFilter implements ExceptionFilter {
  catch(exception: TakenSeatsException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const message = exception.getResponse();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(status).json({
      error: message,
    });
  }
}
