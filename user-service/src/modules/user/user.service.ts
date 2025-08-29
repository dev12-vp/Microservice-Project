import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService implements OnModuleInit {
 
    constructor(
        @InjectRepository(User) private userRepo: Repository<User>,
        @Inject('KAFKA-SERVICE') private readonly kafkaClient: ClientKafka
    ) { }

    async onModuleInit() {
        try {
            console.log('Connected to Kafka');
            await this.kafkaClient.connect();
        } catch (error) {
            console.error('Error connecting to Kafka:', error);
        }
    }

    async createUser(userData: CreateUserDto) {
        const user = this.userRepo.create(userData);
        await this.userRepo.save(user);
        // this.kafkaClient.emit('created_user', user);

        this.kafkaClient.emit('created_user', user).subscribe({
            next: () => console.log('Event sent to Kafka!'),
            error: (err) => console.error('Failed to send event:', err),
        });

        return user;
    }



}
