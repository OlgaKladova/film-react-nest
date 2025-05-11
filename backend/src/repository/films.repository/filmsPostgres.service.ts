import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetFilmDto } from 'src/films/dto/films.dto';
import { Film } from 'src/films/entities/filmPostgres.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmsPostgresService {
  constructor(
    @InjectRepository(Film)
    private filmsPostgresRepository: Repository<Film>,
  ) {}
  async findAll(): Promise<GetFilmDto[]> {
    return await this.filmsPostgresRepository.find();
  }

  async findById(id: string): Promise<GetFilmDto> {
    return await this.filmsPostgresRepository.findOne({
      where: {
        id,
      },
      relations: { schedule: true },
    });
  }
}
