import { ObjectId } from 'typeorm';

export class GetFilmDto {
  _id?: ObjectId;
  id: string;
  rating: number;
  director: string;
  tags: string[];
  title: string;
  about: string;
  description: string;
  image: string;
  cover: string;
  schedule: {
    id: string;
    daytime: string;
    hall: number;
    rows: number;
    seats: number;
    price: number;
    taken: string;
  }[];
}

export class GetFilmsDto {
  total: number;
  items: GetFilmDto[];
}

export class GetScheduleDto {
  total: number;
  items: GetFilmDto['schedule'];
}

export class GetSessionDto {
  id: string;
  daytime: string;
  hall: number;
  rows: number;
  seats: number;
  price: number;
  taken: string;
}
