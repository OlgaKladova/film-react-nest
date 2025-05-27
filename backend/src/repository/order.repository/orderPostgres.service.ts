import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from '../../order/entities/schedulePostgres.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderPostgresService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async getSession(sessionId: string): Promise<Schedule> {
    try {
      const session = await this.scheduleRepository.findOne({
        where: {
          id: sessionId,
        },
      });
      return session;
    } catch (error) {
      console.error(error);
    }
  }
  async updateFilm(sessionId: string, taken: string): Promise<any> {
    try {
      return await this.scheduleRepository.update(
        {
          id: sessionId,
        },
        { taken },
      );
    } catch (error) {
      console.error(error);
    }
  }
}
