import { Injectable } from '@nestjs/common';
import { VideoDocument } from '../schema/video.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { indexDto } from '../dtos'
@Injectable()
export class IndexService {
    constructor(
        @InjectModel('Video') private readonly VideoModel: Model<VideoDocument>,
    ) { }
    async getRecommend() {
        let doc = await this.VideoModel.find({ $or: [{ 'isbanner': true }, { 'isrecommend': true }] }, '-biliurl -__v', { sort: { createTime: -1 } }).populate('uploader', 'nickname');
        return doc
    }
    async getAnyTypeVideoInfo(query: indexDto) {
        const type = query.type
        let doc = await this.VideoModel.find({ type }, '-biliurl -__v', { sort: { createTime: -1 } }).populate('uploader', 'nickname')
        return doc
    }
}
