import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column({ default: false })
  joinTg: boolean;

  @Column({ default: false })
  followX: boolean;
}
