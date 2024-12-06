import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) {}

  async update(data:any): Promise<App[]> {
    return this.appRepository.query(`update app set merits=${data.merits},stamina=${data.stamina} where id=${data.id}`);
  }

  async getInfo(id:string): Promise<App[]> {
    return this.appRepository.query(`select * from user where id=${id}`);
  }

  async updateStamina(): Promise<App[]> {
    return this.appRepository.query(`update app set isReset=1`);
  }

  async createUser(user: any): Promise<App[]> {
    return this.appRepository.query(`insert into user (id,username,merits,stamina) values ('${user.id}','${user.username}',0,1000)`);  
  }
}