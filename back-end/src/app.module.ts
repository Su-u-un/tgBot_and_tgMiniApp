import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InfoModule } from './info/info.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { configRemote, configLocal } from './config';
@Module({
  imports: [
    TypeOrmModule.forRoot(configRemote),
    UsersModule,
    InfoModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}