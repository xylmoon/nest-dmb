import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { ConfigService } from '../../config/config.service';
import { userDto } from '../dtos';
import { UserDocument } from '../schema/user.schema'
import { ApiException, ApiCode } from '../fifters';

const md5 = require('blueimp-md5')
@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User') private readonly UsersModel: Model<UserDocument>,
        private readonly JwtService: JwtService,
        private readonly ConfigService: ConfigService
    ) { }
    async register(body: userDto) {
        let user = new this.UsersModel({
            ...body,
            password: md5(`${md5(body.password)}${this.ConfigService.jwtsecretkey}`)
        })
        let data = await this.UsersModel.findOne({
            $or: [
                { email: body.email },
                { nickname: body.nickname }
            ]
        })
        if (data) { throw new ApiException('邮箱或昵称已注册', ApiCode.ERROR) }
        let { email, bio, avatar, gender, status } = await user.save();
        return await { token: this.JwtService.sign({ email, bio, avatar, gender, status }) }
    }
    async login(body: userDto){
        let userInfo = await this.UsersModel.findOne({
            email: body.email,
            password: md5(`${md5(body.password)}${this.ConfigService.jwtsecretkey}`)
        }, 'email bio avatar gender status -_id').lean()
        if (!userInfo) throw new ApiException('邮箱或密码错误', ApiCode.ERROR)
        return await { token: this.JwtService.sign(userInfo) }
    }
    async validateUser(token: any) {
        return await this.UsersModel.findOne({ email: token.email }).lean();
    }

}
