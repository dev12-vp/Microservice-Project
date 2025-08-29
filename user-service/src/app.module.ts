import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './config/typeorm.config';
import { grpcClientOptions } from './grpc/grpc-client-options';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GrpcReflectionModule.register(grpcClientOptions),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig
    }),
    UserModule,
  ],
})
export class AppModule { }
