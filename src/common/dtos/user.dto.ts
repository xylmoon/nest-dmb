import { IsString, IsEmail, IsNumber } from 'class-validator';
import { IsStrDate } from '../decorator'
export class userDto  {
    @IsString()
    readonly nickname: string;

    @IsString()
    readonly password: string;

    @IsEmail()
    readonly email: string;

    @IsStrDate()
    createTime: Date;

    @IsStrDate()
    loastTime: Date;

    @IsString()
    avatar: string;

    @IsString()
    bio: string;

    @IsNumber()
    gender: number;

    @IsStrDate()
    birthday: Date;

    @IsNumber()
    status: number;
}

 