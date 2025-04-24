import { Film } from 'src/films/entities/filmPostgres.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
@Entity({ name: 'schedule' })
export class Schedule {
  @PrimaryColumn('uuid')
  id: string;

  @Column('timestamp')
  daytime: string;

  @Column()
  hall: number;

  @Column()
  rows: number;

  @Column()
  seats: number;

  @Column()
  price: number;

  @Column('text', { array: true })
  taken: string[];

  @ManyToOne(() => Film, (film) => film.schedule, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  film: Film;
}
