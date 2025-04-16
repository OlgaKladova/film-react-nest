import mongoose from 'mongoose';

//TODO описать DTO для запросов к /films
export class GetFilmDto {
  id: mongoose.Types.ObjectId;
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
    hall: string;
    rows: number;
    seats: number;
    price: number;
    taken: string[];
  }[];
}

export class GetFilmsDto {
  total: number;
  items: GetFilmDto[];
}
