import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { InfoModule } from './info/info.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: process.env.DB_HOST || configService.get('DB_HOST'),
          port: 3306,
          username: process.env.DB_LOCAL_USER || configService.get('DB_LOCAL_USER'),
          password: process.env.DB_LOCAL_PWD || configService.get('DB_LOCAL_PWD'),
          database: process.env.DB_NAME || configService.get('DB_NAME'),
          autoLoadEntities: true,
          synchronize: true,
          timezone: '+08:00',
        };
      },
    }),
    UsersModule,
    InfoModule,
  ]
})
export class AppModule {}