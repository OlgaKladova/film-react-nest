import { Injectable } from '@nestjs/common';
import { FilmsRepository } from 'src/repository/films.repository/films.repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmsRepository: FilmsRepository) {}

  public async findAll() {
    const films = await this.filmsRepository.findAll();
    const items = films.map((item) => {
      delete item._id;
      delete item.schedule;
      return item;
    });
    const total = films.length;
    return {
      total,
      items,
    };
  }

  public async findById(id: string) {
    const film = await this.filmsRepository.findById(id);
    return {
      total: film.schedule.length,
      items: film.schedule,
    };
  }
}
