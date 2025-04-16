import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';

import { configProvider } from './app.config.provider';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from './films/schemas/film.schema';
import { FilmsController } from './films/films.controller';
import { FilmsService } from './films/films.service';
import { FilmsRepository } from './repository/films.repository/films.repository';
import { OrderRepository } from './repository/order.repository/order.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    // @todo: Добавьте раздачу статических файлов из public
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
      renderPath: '/content/afisha/*',
    }),
    MongooseModule.forRoot(configProvider.useValue.database.url),
    MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }]),
  ],
  controllers: [FilmsController, OrderController],
  providers: [
    configProvider,
    FilmsService,
    FilmsRepository,
    OrderService,
    OrderRepository,
  ],
})
export class AppModule {}
