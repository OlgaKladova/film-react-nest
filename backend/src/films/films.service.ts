import { Injectable } from '@nestjs/common';
import { FilmsPostgresService } from '../repository/films.repository/filmsPostgres.service';
import { GetFilmsDto, GetScheduleDto } from './dto/films.dto';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsPostgresService) {}

  public async findAll(): Promise<GetFilmsDto> {
    const films = await this.filmsRepository.findAll();
    const items = films.map((item) => {
      delete item.schedule;
      return item;
    });
    const total = films.length;
    return {
      total,
      items,
    };
  }
  public async findById(id: string): Promise<GetScheduleDto> {
    const film = await this.filmsRepository.findById(id);
    return {
      total: film.schedule.length,
      items: film.schedule,
    };
  }
}
