import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { grpcClientOptions } from './grpc/grpc-client-options';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions,
  );
  await app.listen();
  console.log(`User service listening on gRPC${grpcClientOptions.options.url}`);

}
bootstrap();
