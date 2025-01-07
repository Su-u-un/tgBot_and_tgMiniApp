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

  @Get('getUser')
  user(@Query() data: any, @Response() res:any): any {
    this.usersService.getUser(data.id).then(async (r) => {
      if(!r.length){
        this.usersService.createUser(data)

        return res.send({
          code: 200,
          data: {
            id:data.id,
            click:{
              level:1,
              cost:100,
              value:1,
            },
            limit:{
              level:1,
              cost:100,
              value:1000,
            }
          },
          message: 'success'
        });
      }
      // 获取点击等级和数值
      const click = await this.usersService.getClick(data.id)
      // 获取体力值上限和数值
      const limit = await this.usersService.getLimit(data.id)

      return res.send({
        code: 200,
        data: {
          id:data.id,
          click:{
            level:click[0].level,
            cost:click[0].cost,
            value:click[0].value,
          },
          limit:{
            level:limit[0].level,
            cost:limit[0].cost,
            value:limit[0].value,
          }
        },
        message: 'success'
      });
    })
    
  }
}