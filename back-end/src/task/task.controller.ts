import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Query,
  Response
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('')
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Get('getTask')
  async getTask(@Query() data: any, @Response() res:any): Promise<any> {
    const task = await this.TaskService.getTask(data.id)
    // 如果没有数据，就新建
    if(!task.length) {
      this.TaskService.createTask(data.id)
      return res.send({
        code: 200,
        data: {
          joinTg:0,
          followX:0
        },
        message: 'success'
      })
    }
    else return res.send({
      code: 200,
      data: {
        joinTg:task[0].joinTg,
        followX:task[0].followX
      },
      message: 'success'
    });
  }
  
  @Get('joinTg')
  async joinTg(@Query() data: any, @Response() res:any): Promise<any> {
    // 检查tg任务是否已经做过
    const tasks = await this.TaskService.getTask(data.id)
    if(tasks[0].joinTg === 1){
      return res.send({code: 400, message: 'task done'})
    }
    else{
      // 否则加功德，并且把任务改成1
      this.TaskService.joinTg(data.id).then((r) => {
        if(!r.affectedRows) return res.send({code: 500, message: 'serve error'})
        else return res.send({code: 200, message: 'success'})
      })
    }
  }

  @Get('followX')
  async followX(@Query() data: any, @Response() res:any): Promise<any> {
    // 检查tg任务是否已经做过
    const tasks = await this.TaskService.getTask(data.id)
    if(tasks[0].followX === 1){
      return res.send({code: 400, message: 'task done'})
    }
    else{
      // 否则加功德，并且把任务改成1
      this.TaskService.followX(data.id).then((r) => {
        if(!r.affectedRows) return res.send({code: 500, message: 'serve error'})
        else return res.send({code: 200, message: 'success'})
      })
    }
  }
}