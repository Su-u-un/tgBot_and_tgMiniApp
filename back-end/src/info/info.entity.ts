import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  merits: string;

  @Column({ type: 'varchar' })
  stamina: string;

  @Column({ type: 'varchar' })
  updateTime: string;
}
