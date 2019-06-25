import { Controller, Get, Post, Body } from '@nestjs/common';
import { OssService } from '../common/services';
@Controller()
export class OssController {
    constructor(
        private readonly OssService: OssService,
    ) {}
    @Get('ossSign')
    ossSign() {
        return this.OssService.ossSign()
    }
    @Post('ossCallback')
    ossCallback(@Body() body) {
        return body
    }
}
