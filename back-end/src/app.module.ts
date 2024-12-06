import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { App } from './app.entity';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'R822FOl6Rg!R',
      database: 'tg-game',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([App])
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}