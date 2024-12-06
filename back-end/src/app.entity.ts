import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar' })
  merits: string;

  @Column({ type: 'varchar' })
  stamina: string;

  @Column({ default: 1 })
  isActive: number;

  @Column({ default: 1 })
  isReset: number;
}