import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Notification } from "src/database/entities/notification.entity";


export const getTypeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: '12321232',
    database: configService.get<string>('DB_NAME'),
    entities: [Notification],
    synchronize: false,
    autoLoadEntities: false,
    logging: true
});