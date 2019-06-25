import { Options } from 'ali-oss'

export interface OssConfig extends Options {
    dirPath: string;
    bucket: string;
    region: string;
    endpoint: string;
    cname: boolean;
    accessKeyId: string;
    accessKeySecret: string;
    callbackIp: string;
    callbackPort: number;
    callbackPath: string;
    expAfter: number;
    maxSize: number;
}
