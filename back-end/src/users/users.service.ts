import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { timestamp } from 'src/utils';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async getUser(id:string): Promise<User[]> {
    return this.usersRepository.query(`select * from user where id=${id}`);
  }

  async getClick(level:string): Promise<any> {
    return this.usersRepository.query(`select value from attr where type='click' and level=${level}`);
  }

  async getClickCost(level:any): Promise<any> {
    return this.usersRepository.query(`select cost from attr where type='click' and level=${level}`);
  }

  async getMerits(id:string): Promise<any> {
    return this.usersRepository.query(`select merits from info where id=${id}`);
  }

  async update(data:any): Promise<any> {
    const time = timestamp()
    return this.usersRepository.query(`update info set merits=${data.merits},updateTime='${time}' where id=${data.id}`);
  }

  async updateUser(data:any): Promise<any> {
    return this.usersRepository.query(`update user set click=${data.click} where id=${data.id}`);
  }

  async createUser(user: any): Promise<any> {
    const time = timestamp()
    this.usersRepository.query(`insert into info (id,merits,stamina,updateTime) values ('${user.id}',0,1000,'${time}')`);  
    this.usersRepository.query(`insert into user (id,username) values ('${user.id}','${user.username}')`);  
  }
}