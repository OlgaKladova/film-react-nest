import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film } from 'src/films/schemas/film.schema';

@Injectable()
export class FilmsRepository {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}
  async findAll(): Promise<Film[]> {
    const items = await this.filmModel.find({}).lean();
    return items;
  }

  async findById(id: string): Promise<Film> {
    const film = await this.filmModel.findOne({ id: id }).lean();
    return film;
  }
}
