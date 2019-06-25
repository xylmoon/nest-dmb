import { Schema, Document } from 'mongoose';


export interface UserDocument extends Document {
    nickname: string;
    password: string;
    email: string;
    createTime: Date;
    loastTime: Date;
    avatar: string;
    bio: string;
    gender: number;
    birthday: Date;
    status: number;
}

export const UserSchema: Schema = new Schema({
    nickname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    loastTime: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: '请说点什么吧'
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    birthday: {
        type: Date,
    },
    status: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5],
        default: 0
    }
});

 
