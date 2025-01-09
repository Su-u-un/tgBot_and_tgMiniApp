import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Info {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar' })
  merits: string;

  @Column({ type: 'varchar' })
  stamina: string;

  @Column({ type: 'varchar' })
  updateTime: string;

  @Column({ type: 'varchar' })
  today: string;
}
