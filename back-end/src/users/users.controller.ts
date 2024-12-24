import {
  Body,
  Query,
  Controller,
  Delete,
  Get,
  Post,
  ParseIntPipe,
  HttpCode,
  Response
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 这里顺便把用户属性也进行查询和返回
  @Get('getUser')
  async user(@Query() data: any, @Response() res:any): Promise<any> {
    const user = await this.usersService.getUser(data.id)
    // 如果不存在，创建用户
    if(!user.length){
      this.usersService.createUser(data)
    }
    // 获取点击等级
    const click_level = user.length ? user[0].click : '1'
    // 查询对应值
    const click = await this.usersService.getClick(click_level)

    return res.send({
        code: 200,
        data: {
          click: click[0].value
        },
        message: 'success'
    });
  }
  @Get('updateClick')
  async updateClick(@Query() data: any, @Response() res:any): Promise<any> {
    // 获取用户功德
    const result = await this.usersService.getMerits(data.id)
    // 获取当前用户等级
    const user = await this.usersService.getUser(data.id)
    // 获取下一等级升级所需值
    // const next_level = Number( user[0].click+'' ) + 1
    const cost = await this.usersService.getClickCost(2)

    if(result[0].merits < cost[0].value){
      return res.send({
        code: 400,
        message: '功德不足'
      });
    }else{
      // 计算扣除后的功德
      const temp_merits = result[0].merits - cost[0].value
      const new_merits = await this.usersService.update({id: data.id, merits: temp_merits})
      // 把用户的click等级加一
      
      return res.send({
        code: 200,
        data:new_merits[0],
        message: 'success'
      });
      
    }
  }
}