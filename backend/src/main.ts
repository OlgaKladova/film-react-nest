import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { TskvLogger } from './logger/tskv.logger';
import { JsonLogger } from './logger/json.logger';
import { DevLogger } from './logger/dev.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  process.env.LOGGER_FORMAT === 'JSON'
    ? app.useLogger(new JsonLogger())
    : process.env.LOGGER_FORMAT === 'TSKV'
      ? app.useLogger(new TskvLogger())
      : app.useLogger(new DevLogger());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
