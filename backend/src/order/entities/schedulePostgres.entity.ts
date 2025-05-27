import { Film } from '../../films/entities/filmPostgres.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
@Entity({ name: 'schedules' })
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

  @Column('text')
  taken: string;

  @ManyToOne(() => Film, (film) => film.schedule, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  film: Film;
}
