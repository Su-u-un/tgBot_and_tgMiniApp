import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Info } from './info.entity';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
  imports: [TypeOrmModule.forFeature([Info])],
  providers: [InfoService],
  controllers: [InfoController],
})
export class InfoModule {}
