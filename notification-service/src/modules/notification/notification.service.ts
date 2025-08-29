import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from 'src/database/entities/notification.entity';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationService {
    constructor(@InjectRepository(Notification) private notificationRepository: Repository<Notification>) { }

    async createNotification(data: CreateNotificationDto) {
        console.log("data", data);
        const notification = this.notificationRepository.create(data);
        return this.notificationRepository.save(notification);
    }
}
