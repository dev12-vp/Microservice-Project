import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsEmail()
    @IsNotEmpty()
    workEmail: string

    @IsStrongPassword()
    @IsNotEmpty()
    password: string
}