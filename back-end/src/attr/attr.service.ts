import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attr } from './attr.entity';

@Injectable()
export class AttrService {
  constructor(
    @InjectRepository(Attr)
    private readonly attrRepository: Repository<Attr>,
  ) {}

  async getInfo(id:string): Promise<any> {
    return this.attrRepository.query(`select * from info where id=${id}`);
  }

  async getClick(id:string): Promise<any> {
    const t = await this.attrRepository.query(`select * from user where id=${id}`);
    return this.attrRepository.query(`select * from attr where level=${t[0].click} and type='click'`);
  }

  async setMerits(id:string,merits:any): Promise<any> {
    return this.attrRepository.query(`update info set merits=${merits} where id=${id}`);
  }

  async setClick(id:string,level:number): Promise<any> {
    return this.attrRepository.query(`update user set click=${level} where id=${id}`);
  }
}