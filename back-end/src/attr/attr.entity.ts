import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Attr {
  @PrimaryGeneratedColumn()
  id: number; // 自增主键

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  level: string;

  @Column({ type: 'varchar' })
  value: string; 

  @Column({ type: 'varchar' })
  cost: string;
}   
