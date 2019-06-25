import {IsString, IsBoolean, IsDate, IsArray, IsNumber } from 'class-validator';
import {IsStrDate} from '../decorator'

export class videoListDto {
    @IsString()
    pageSize:string;
    
    @IsString()
    pageCurrent:string;
}


export class videoDto {
    @IsString()
    title: string;

    @IsString()
    uploader: string;

    @IsString()
    author: string;

    @IsString()
    cover: string;

    @IsString()
    banner: string;

    @IsBoolean()
    isbanner: Boolean;

    @IsBoolean()
    isrecommend: Boolean;

    @IsString()
    createTime: Date;

    @IsString()
    loastTime: Date;

    @IsString()
    desc: string;


    @IsString()
    like: string;

    @IsArray()
    tag: string[];

    @IsString()
    type: string;

    @IsString()
    biliurl: string;

    @IsArray()
    proxy: string[];


    @IsString()
    startTime: Date;


    @IsNumber()
    status: number;

    @IsString()
    pid:string;
}
