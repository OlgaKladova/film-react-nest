import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type FilmDocument = HydratedDocument<Film>;

@Schema()
export class Film {
  @Prop()
  _id: mongoose.Types.ObjectId;

  @Prop({ require: true })
  id: string;

  @Prop({ require: true })
  rating: number;

  @Prop({ require: true })
  director: string;

  @Prop({ type: [String], require: true })
  tags: string[];

  @Prop({ require: true })
  title: string;

  @Prop({ require: true })
  about: string;

  @Prop({ require: true })
  description: string;

  @Prop({ require: true })
  image: string;

  @Prop({ require: true })
  cover: string;

  @Prop(
    raw([
      {
        id: { type: String, require: true },
        daytime: { type: String, require: true },
        hall: { type: String, require: true },
        rows: { type: Number, require: true },
        seats: { type: Number, require: true },
        price: { type: Number, require: true },
        taken: { type: [String], require: true },
      },
    ]),
  )
  schedule: Record<string, string | number | string[]>[];
}

export const FilmSchema = SchemaFactory.createForClass(Film);
