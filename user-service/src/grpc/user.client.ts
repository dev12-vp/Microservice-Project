import { Observable } from "rxjs";
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import type { ClientGrpc } from "@nestjs/microservices";
import { CreateUserDto } from "src/modules/user/dto/create-user.dto";

interface UserServiceGrpc {
  CreateUser(data: CreateUserDto): Observable<any>;
}


@Injectable()
export class UserClient implements OnModuleInit {
    private userService: UserServiceGrpc

    constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) { }

    onModuleInit() {
        this.userService = this.client.getService<UserServiceGrpc>('UserService')
    }

    getService() {
        return this.userService
    }
}