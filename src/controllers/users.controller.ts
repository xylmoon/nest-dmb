import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from '../common/services/users.service'
import { userDto } from '../common/dtos/user.dto'
@Controller()
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }
    @Post('register')
    register(@Body() body: userDto) {
        return this.UsersService.register(body);
    }
    @Post('login')
    login(@Body() body: userDto){
       return this.UsersService.login(body)
    }

    @Get('getUserInfo')
    @UseGuards(AuthGuard())
    getUserInfo(@Req() req) {
        return req.user.payload
    }
}
