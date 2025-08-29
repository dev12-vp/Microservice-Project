import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { MailService } from '../mail/mail.service';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService,
        private readonly mailService: MailService
    ) { }

    @MessagePattern('created_user')
    async createUser(@Payload() payload: any) {
        console.log('Kafka message received:', payload);
        const message: any = `Hi ${payload.name}, welcome to our NotificationApp! 🚀`;
        this.mailService.mailSend(
            payload.email,
            '🎉 Welcome to NotificationApp!',
            message
        );
        return this.notificationService.createNotification({userId: payload.id, message : message});
    }
}
