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
import { InfoService } from './info.service';

@Controller('')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  
  @Get('getInfo')
  getInfo(@Query() data: any, @Response() res:any): any {
    this.infoService.getInfo(data.id).then((r) => {
      return res.send({
        code: 200,
        data: r[0],
        message: 'success'
      });
    });
  }

  @Post('update')
  update(@Body() body: any): any {
    this.infoService.update(body).then((r) => {
      return {
        code: 200,
        message: 'success'
      };
    });
  }
}