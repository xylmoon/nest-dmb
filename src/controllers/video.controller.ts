import { Controller, Get, UseGuards, Post, Body, Req, Query } from '@nestjs/common';
import { VideoService } from '../common/services/video.service'
import { AuthGuard } from '@nestjs/passport';
import { videoDto, videoListDto } from '../common/dtos';
import { UserDocument } from '../common/schema'
@Controller()
@UseGuards(AuthGuard())
export class VideoController {
  constructor(private readonly VideoService: VideoService) { }
  @Post('setVideoInfo')
  setVideoInfo(@Body() body: videoDto, @Req() req) {
    let user: UserDocument = req.user.user
    return this.VideoService.setVideoInfo(body, user._id)
  }

  @Get('getVideoList')
  getVideoList(@Query() query: videoListDto, @Req() req) {
    let user: UserDocument = req.user.user
    console.log(user)
    return this.VideoService.getVideoList(query, user._id)
  }

  @Post('updateVideoInfo')
  updateVideoInfo(@Body() body: videoDto) {
    return this.VideoService.updateVideoInfo(body)
  }

  @Post('removeVideoInfo')
  removeVideoInfo(@Body() body: videoDto) {
    return this.VideoService.removeVideoInfo(body)
  }
  @Get('getVideoInfo')
  getVideoInfo(@Query() query: videoDto){
    return this.VideoService.getVideoInfo(query)
  }

}
