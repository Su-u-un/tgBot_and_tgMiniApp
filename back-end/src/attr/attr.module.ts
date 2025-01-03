import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attr } from './attr.entity';
import { AttrController } from './attr.controller';
import { AttrService } from './attr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Attr])],
  providers: [AttrService],
  controllers: [AttrController],
})
export class AttrModule {}
