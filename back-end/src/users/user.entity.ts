import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 1 })
  click: number;

  @Column({ default: 1 })
  limitt: number;
}