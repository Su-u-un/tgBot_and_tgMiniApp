import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Attribute {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  level: string;

  @Column({ type: 'varchar' })
  value: string; 

  @Column({ type: 'varchar' })
  cost: string;
}
