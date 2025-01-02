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
}