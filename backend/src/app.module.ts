import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import * as path from 'node:path';

import { configProvider } from './app.config.provider';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { FilmsController } from './films/films.controller';
import { FilmsService } from './films/films.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './order/entities/schedulePostgres.entity';
import { Film } from './films/entities/filmPostgres.entity';
import { FilmsPostgresService } from './repository/films.repository/filmsPostgres.service';
import { OrderPostgresService } from './repository/order.repository/orderPostgres.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
      renderPath: '/content/afisha/*',
    }),
    TypeOrmModule.forRoot(configProvider.useValue.database),
    TypeOrmModule.forFeature([Film, Schedule]),
  ],
  controllers: [FilmsController, OrderController],
  providers: [
    configProvider,
    FilmsService,
    FilmsPostgresService,
    OrderService,
    OrderPostgresService,
  ],
})
export class AppModule {}
