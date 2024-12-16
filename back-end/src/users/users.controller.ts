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
    this.usersService.getUser(data.id).then((r) => {
      if(!r.length){
        this.usersService.createUser(data)
      }
      return res.send({
        code: 200,
        data: {id:data.id},
        message: 'success'
      });
    })
    
  }
}