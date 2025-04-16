import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { TakenSeatsEception } from '../exceptions/seats-exists.exception';

@Catch(TakenSeatsEception)
export class TakenSeatsExceptionFilter implements ExceptionFilter {
  catch(exception: TakenSeatsEception, host: ArgumentsHost) {
    const status = exception.getStatus();
    const message = exception.getResponse();
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(status).json({
      error: message,
    });
  }
}
