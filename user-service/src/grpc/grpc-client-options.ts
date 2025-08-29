import { GrpcOptions, Transport } from "@nestjs/microservices";
import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, '../../src/grpc/user.proto'),
    url: 'localhost:50052',
    loader: {
      oneofs: true,
    },
  },

});