import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film } from 'src/films/schemas/film.schema';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

  async getSEssion(filmId: string, sessionId: string): Promise<Partial<Film>> {
    try {
      const session = await this.filmModel.findOne(
        {
          id: filmId,
          'schedule.id': sessionId,
        },
        { 'schedule.$': 1 },
      );
      return session;
    } catch (error) {
      console.error(error);
    }
  }
  async updatefilm(
    filmId: string,
    sessionId: string,
    taken: string,
  ): Promise<Film> {
    try {
      const film = await this.filmModel.findOneAndUpdate(
        {
          id: filmId,
          'schedule.id': sessionId,
        },
        {
          $addToSet: { 'schedule.$.taken': taken },
        },
        { new: true },
      );
      return film;
    } catch (error) {
      console.error(error);
    }
  }
}
