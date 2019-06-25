import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoDocument } from '../schema';
import { videoDto, videoListDto } from '../dtos';
import { OssService } from './oss.service';
import { ConfigService } from '../../config/config.service';
import * as OSS from 'ali-oss';
import { UserDocument } from '../schema';
import { URL } from 'url'
import { ApiException, ApiCode } from '../fifters';

@Injectable()
export class VideoService {
    client: OSS = this.OssService.client;

    constructor(
        @InjectModel('Video') private readonly VideoModel: Model<VideoDocument>,
        private readonly OssService: OssService,
        private readonly ConfigService: ConfigService
    ) { };
    async setVideoInfo(body: videoDto, uid: UserDocument) {
        body.cover = body.cover && await this.ossImgCopy(body.cover)
        body.banner = body.banner && await this.ossImgCopy(body.banner)
        console.log(uid)
        let video = new this.VideoModel({
            ...body,
            uploader: uid
        })

        await video.save()
        return '保存成功'
    }


    async getVideoList(query: videoListDto, uid: UserDocument) {
        let pageSize = parseInt(query.pageSize), pageCurrent = parseInt(query.pageCurrent)
        const list = await this.VideoModel.find({ uploader: uid }, null, { limit: pageSize, skip: pageCurrent * pageSize, sort: { createTime: -1 } })
        const total = await this.VideoModel.countDocuments({ uploader: uid })
        return {
            list,
            pageSize,
            pageCurrent,
            total
        }
    }

    async updateVideoInfo(body: videoDto) {
        const query = await this.VideoModel.findById(body.pid)

        if (query.cover != body.cover) {
            body.cover = body.cover && await this.ossImgCopy(body.cover);
            query.cover && this.ossImgDelete(query.cover)
        }
        if (query.banner != body.banner) {
            body.banner = body.banner && await this.ossImgCopy(body.banner);
            query.banner && this.ossImgDelete(query.banner)
        }

        await this.VideoModel.updateMany({ _id: body.pid }, body)
        return '修改成功'
    }


    async removeVideoInfo(body: videoDto) {
        const pid = body.pid
        const query = await this.VideoModel.findById(pid)
        if (query.cover) this.ossImgDelete(query.cover)
        if (query.banner) this.ossImgDelete(query.banner)
        await this.VideoModel.deleteMany({ _id: pid })
        return '删除成功'
    }


    async ossImgCopy(url: string): Promise<string> {
        let  res:any = await this.client.copy(`image/${url}`.replace(`${this.ConfigService.ossConfig.dirPath}/`, ''), url);
        return res.res.requestUrls[0].replace('http', 'https')
    }


    async ossImgDelete(url: string) {
        await this.client.delete(new URL(url).pathname);
    }

    async getVideoInfo(query: videoDto) {
        const pid = query.pid
        if (!pid) throw new ApiException('邮箱或密码错误', ApiCode.ERROR)
        const doc = await this.VideoModel.findById(pid, '-__v').populate('uploader', 'nickname')
        return doc
    }

}
