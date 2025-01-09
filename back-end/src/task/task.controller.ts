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
          followX:0,
          todayTen:0,
          todayHundred:0,
          todayThousand:0
        },
        message: 'success'
      })
    }
    else return res.send({
      code: 200,
      data: {
        joinTg:task[0].joinTg,
        followX:task[0].followX,
        todayTen:task[0].todayTen,
        todayHundred:task[0].todayHundred,
        todayThousand:task[0].todayThousand
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

  @Get('today')
  async today(@Query() data: any, @Response() res:any): Promise<any> {
    const tmp = {
      todayTen:10,
      todayHundred:100,
      todayThousand:1000
    }
    // 检查活跃任务的值够不够，如果不够无法完成任务
    const info = await this.TaskService.getInfo(data.id)
    if(info[0].today < tmp[data.type]) return res.send({code: 400, message: 'today merits not enough'})
    // 检查活跃任务是否已经做过
    const tasks = await this.TaskService.getTask(data.id)
    if(tasks[0][data.type] === 1){
      return res.send({code: 400, message: 'task done'})
    }
    else{
      // 否则加功德，并且把任务改成1
      this.TaskService.today(data).then(async (r) => {
        if(!r.affectedRows) return res.send({code: 500, message: 'serve error'})
        else {
          const nextInfo = await this.TaskService.getInfo(data.id)
          return res.send({
              code: 200, 
              data: nextInfo[0],
              message: 'success'
            })
        }
      })
    }
  }
}