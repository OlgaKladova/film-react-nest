import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Film } from './films/entities/filmPostgres.entity';
import { Schedule } from './order/entities/schedulePostgres.entity';

export const configProvider = {
  imports: [ConfigModule.forRoot()],
  provide: 'CONFIG',
  useValue: <AppConfig>{
    database: {
      type: process.env.DATABASE_DRIVER || 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'student',
      password: process.env.DATABASE_PASSWORD || 'student',
      database: process.env.DATABASE_NAME || 'prac',
      entities: [Film, Schedule],
      synchronize: false,
    },
  },
};

export interface AppConfig {
  database: TypeOrmModuleOptions;
}
