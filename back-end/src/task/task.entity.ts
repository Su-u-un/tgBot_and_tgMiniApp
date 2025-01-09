import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  id: string;

  @Column({ default: false })
  joinTg: boolean;

  @Column({ default: false })
  followX: boolean;

  @Column({ default: false })
  todayTen: boolean;

  @Column({ default: false })
  todayHundred: boolean;

  @Column({ default: false })
  todayThousand: boolean;
}
