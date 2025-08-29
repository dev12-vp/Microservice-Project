import { Module } from '@nestjs/common';
import { NotificationModule } from './modules/notification/notification.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NotificationController } from './modules/notification/notification.controller';
import { NotificationService } from './modules/notification/notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { MailModule } from './modules/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NotificationModule,
    MailModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig
    }),]
})
export class AppModule { }
