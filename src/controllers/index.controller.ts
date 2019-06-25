import { Controller, Get, Query } from '@nestjs/common';
import { IndexService } from '../common/services/index.service';
import {indexDto} from '../common/dtos'
@Controller('index')
export class IndexController {
    constructor(
        private readonly IndexService: IndexService
    ){}
    @Get('getRecommend')
    getRecommend(){
        return this.IndexService.getRecommend();
    }
    @Get('getAnyTypeVideoInfo')
    getAnyTypeVideoInfo(@Query() query: indexDto){
        return this.IndexService.getAnyTypeVideoInfo(query)
    }
}
