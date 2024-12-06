import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { App } from './app.entity';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('info')
  info(@Body() body: any): any {
    this.appService.getInfo(body.id).then((res) => {
      console.log(res)
      if(res.length){
        // if(res[0].isReset === 0){

        //   return {
        //     stamina: 1000,
        //     merits: res[0].merits
        //   }
        // }else{
        //   return {
        //     stamina: res[0].stamina,
        //     merits: res[0].merits
        //   }
        // }
        return {
          code: 200,
          data:res[0],
          message: 'success'
        };
      }
      else{
        this.appService.createUser(body);
        return {
          code: 200,
          data: {
            stamina: 1000,
            merits: 0
          },
          message: 'success'
        };
      }
    });
  }

  @Post('update')
  update(@Body() body: any): any {
    this.appService.update(body).then((res) => {
      return {
        code: 200,
        message: 'success'
      };
    });
  }
}
