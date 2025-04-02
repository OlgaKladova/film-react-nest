import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from './schemas/film.schema';
import { FilmsController } from './films.controller';
import { FilmsRepository } from 'src/repository/films.repository/films.repository';
import { FilmsService } from './films.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }])],
  controllers: [FilmsController],
  providers: [FilmsService, FilmsRepository],
})
export class FilmsModule {}
