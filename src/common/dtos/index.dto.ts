import { IsString, IsEmail, IsNumber } from 'class-validator';

export class indexDto {
    @IsString()
    type:string;
}

