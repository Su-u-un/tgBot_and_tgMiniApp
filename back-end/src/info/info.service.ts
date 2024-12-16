import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Info } from './info.entity';
import { timestamp } from 'src/utils';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info)
    private readonly infoRepository: Repository<Info>,
  ) {}

  async getInfo(id:string): Promise<Info[]> {
    return this.infoRepository.query(`select * from info where id=${id}`);
  }

  async update(data:any): Promise<Info[]> {
    const time = timestamp()
    return this.infoRepository.query(`update info set merits=${data.merits},stamina=${data.stamina},updateTime='${time}' where id=${data.id}`);
  }
}