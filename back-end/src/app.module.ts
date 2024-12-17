import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InfoModule } from './info/info.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    InfoModule
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}