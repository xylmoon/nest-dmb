import { Schema, Document } from 'mongoose';
import * as moment from 'moment'

export interface VideoDocument extends Document {
    title: string;
    uploader: string;
    author: string;
    cover: string;
    banner: string;
    isbanner: Boolean;
    isrecommend: Boolean;
    createTime: Date;
    loastTime: Date;
    desc: string;
    like: string;
    tag: string[];
    type: string;
    biliurl: string;
    proxy: string[];
    startTime: Date;
    status: number;
}

export const VideoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    uploader: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    author: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        default: ''
    },
    banner: {
        type: String,
        default: ''
    },
    isbanner: {
        type: Boolean,
        default: false
    },
    isrecommend: {
        type: Boolean,
        default: false
    },
    createTime: {
        type: Date,
        default: Date.now,
        get(date){
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    loastTime: {
        type: Date,
        default: Date.now,
        get(date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        }
    },
    desc: { //详情
        type: String,
        required: true,
    },
    like: { //喜欢
        type: String,
        default: 0
    },
    tag: { //标签
        type: Array,
        required: true,
    },
    type: { //分类
        type: String, //0 下季资讯  1 本季推荐 2 部长最爱
        required: true
    },
    biliurl: {
        type: String
    },
    proxy: { //代理商
        type: Array
    }, //开始播放时间
    startTime: {
        type: Date,
        get(date) {
            date = moment(date);
            return date.isValid() ? date.format('YYYY-MM-DD HH:mm:ss') : ''
        }
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        default: 0
    }
});

VideoSchema.set('toObject', { getters: true });
VideoSchema.set('toJSON', { getters: true });
VideoSchema.pre('updateMany', function(nest) {
    this.update({ 'loastTime': Date.now() })
    nest()
});


