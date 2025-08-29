import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { GrpcReflectionModule } from 'nestjs-grpc-reflection';
import { grpcClientOptions } from 'src/grpc/grpc-client-options';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    GrpcReflectionModule.register(grpcClientOptions),
    ClientsModule.register([{
      name: 'KAFKA-SERVICE',
      transport: Transport.KAFKA,
      options: {
        client: { clientId: 'user-service', brokers: ['localhost:9092'] },
        consumer: { groupId: 'user-consumer' },
      }
    },])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
