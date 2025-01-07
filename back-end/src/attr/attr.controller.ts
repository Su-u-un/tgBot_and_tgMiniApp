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
import { AttrService } from './attr.service';

@Controller('')
export class AttrController {
  constructor(private readonly attrService: AttrService) {}

  @Get('upgradeClick')
  async upgradeClick(@Query() data: any, @Response() res:any): Promise<any> {
    // 查询功德
    const info = await this.attrService.getInfo(data.id)
    // 查询所需花费
    const click = await this.attrService.getClick(data.id)
    const tmp = Number(info[0].merits)-Number(click[0].cost)
    if(tmp<0) return res.send({code: 400, message: 'merits not enough'})
    else{
      // 满足升级条件
      // 更新功德
      const r = await this.attrService.setMerits(data.id,tmp)
      // 升级属性
      const e = await this.attrService.setClick(data.id,Number(click[0].level)+1)
      // 获取下一级的花费
      const nextClick = await this.attrService.getClick(data.id)
      if(!r.affectedRows || !e.affectedRows) return res.send({code: 500, message: 'serve error'})
      else 
        return res.send({
          code: 200, 
          data:{
            level:nextClick[0].level,
            cost:nextClick[0].cost,
            value:nextClick[0].value,
            merits:tmp
          },
          message: 'success'
        })
    }
  }

  @Get('upgradeLimit')
  async upgradeLimit(@Query() data: any, @Response() res:any): Promise<any> {
    // 查询功德
    const info = await this.attrService.getInfo(data.id)
    // 查询所需花费
    const limit = await this.attrService.getLimit(data.id)
    const tmp = Number(info[0].merits)-Number(limit[0].cost)
    if(tmp<0) return res.send({code: 400, message: 'merits not enough'})
    else{
      // 满足升级条件
      // 更新功德
      const r = await this.attrService.setMerits(data.id,tmp)
      // 升级属性
      const e = await this.attrService.setLimit(data.id,Number(limit[0].level)+1)
      // 获取下一级的花费
      const nextLimit = await this.attrService.getLimit(data.id)
      if(!r.affectedRows || !e.affectedRows) return res.send({code: 500, message: 'serve error'})
      else 
        return res.send({
          code: 200, 
          data:{
            level:nextLimit[0].level,
            cost:nextLimit[0].cost,
            value:nextLimit[0].value,
            merits:tmp
          },
          message: 'success'
        })
    }
  }
}