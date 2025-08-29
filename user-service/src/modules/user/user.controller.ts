import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name);
    constructor(private userService: UserService) { }

    @GrpcMethod('UserService', 'CreateUser')
    createUser(data: CreateUserDto) {
        this.logger.log('Creating user...');
        const user = this.userService.createUser(data);
        return user;
    }
}
