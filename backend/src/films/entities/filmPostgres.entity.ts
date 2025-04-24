import { Schedule } from 'src/order/entities/schedulePostgres.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
@Entity({ name: 'film' })
export class Film {
  @PrimaryColumn('uuid', { unique: true })
  id: string;

  @Column()
  rating: number;

  @Column()
  director: string;

  @Column('text', { array: true })
  tags: string[];

  @Column()
  image: string;

  @Column()
  cover: string;

  @Column()
  title: string;

  @Column()
  about: string;

  @Column()
  description: string;

  @OneToMany(() => Schedule, (schedule) => schedule.film)
  schedule: Schedule[];
}
