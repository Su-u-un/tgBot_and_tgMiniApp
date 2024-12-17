import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Info {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  id: string;

  @Column({ type: 'varchar' })
  merits: string;

  @Column({ type: 'varchar' })
  stamina: string;

  @Column({ type: 'varchar' })
  updateTime: string;
}
