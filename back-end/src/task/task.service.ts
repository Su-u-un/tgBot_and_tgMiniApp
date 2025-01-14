import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async createTask(id:string): Promise<any> {
    return this.taskRepository.query(`insert into task (id,joinTg,followX) values ('${id}',0,0)`);
  }


  async getTask(id:string): Promise<any> {
    return this.taskRepository.query(`select * from task where id=${id}`);
  }

  async joinTg(id:any): Promise<any> {
    // 加功德
    this.taskRepository.query(`update info set merits = CONVERT(merits, SIGNED) + 2000 where id=${id};`)
    // 任务已完成
    return this.taskRepository.query(`update task set joinTg = 1 where id=${id};`);
  }

  async followX(id:any): Promise<any> {
    // 加功德
    this.taskRepository.query(`update info set merits = CONVERT(merits, SIGNED) + 2000 where id=${id};`)
    // 任务已完成
    return this.taskRepository.query(`update task set followX = 1 where id=${id};`);
  }
  async today(data:any): Promise<any> {
    // 加功德
    if(data.type === 'todayTen') this.taskRepository.query(`update info set merits = CONVERT(merits, SIGNED) + 5 where id=${data.id};`)
    else if(data.type === 'todayHundred') this.taskRepository.query(`update info set merits = CONVERT(merits, SIGNED) + 50 where id=${data.id};`)
    else if(data.type === 'todayThousand') this.taskRepository.query(`update info set merits = CONVERT(merits, SIGNED) + 500 where id=${data.id};`)

    // 任务已完成
    return this.taskRepository.query(`update task set ${data.type} = 1 where id=${data.id};`);
  }

  async resetToday(id:string): Promise<any> {
    // 重置每日任务
    return this.taskRepository.query(`update task set todayTen = 0,todayHundred = 0,todayThousand = 0 where id=${id};`);
  }

  async getInfo(id:string): Promise<any> {
    return this.taskRepository.query(`select * from info where id=${id}`);
  }

  async heal(id:string): Promise<any> {
    return this.taskRepository.query(`update task set heal = CONVERT(heal, SIGNED) - 1  where id=${id};`);
  }

  async bless(id:string): Promise<any> {
    return this.taskRepository.query(`update task set bless = CONVERT(bless, SIGNED) - 1  where id=${id};`);
  }

  async resetHeal(id:string): Promise<any> {
    // 重置
    return this.taskRepository.query(`update task set heal = 3 where id=${id};`);
  }

  async resetBless(id:string): Promise<any> {
    // 重置
    return this.taskRepository.query(`update task set bless = 3 where id=${id};`);
  }
}