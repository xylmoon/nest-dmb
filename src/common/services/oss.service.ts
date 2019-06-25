import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import * as crypto from 'crypto'
import * as OSS from 'ali-oss'
import moment = require('moment');
@Injectable()
export class OssService {
    static config = ConfigService

    public client: OSS = new OSS({
        endpoint: this.ConfigService.ossConfig.endpoint,
        cname: this.ConfigService.ossConfig.cname,
        accessKeyId: this.ConfigService.ossConfig.accessKeyId,
        accessKeySecret: this.ConfigService.ossConfig.accessKeySecret,
        bucket: this.ConfigService.ossConfig.bucket
    })
    
    constructor(
        private readonly ConfigService: ConfigService
    ){}
    
    ossSign(){
        const {
            bucket,
            region,
            expAfter,
            maxSize,
            dirPath,
            accessKeyId,
            accessKeySecret,
            callbackIp,
            callbackPort,
            callbackPath
        } = this.ConfigService.ossConfig

        const host = `https://${bucket}.${region}.aliyuncs.com` //你的oss完整地址
        const expireTime = new Date().getTime() + expAfter
        const expiration = new Date(expireTime).toISOString()
        const policyString = JSON.stringify({
            expiration,
            conditions: [
                ['content-length-range', 0, maxSize],
                ['starts-with', '$key',  `${dirPath}/${moment().format('YYYYMMDD')}/`]
            ]
        })
        const policy = new Buffer(policyString).toString("base64")
        const Signature = crypto.createHmac('sha1', accessKeySecret).update(policy).digest("base64")
        const callbackBody = {
            "callbackUrl": `https://${callbackIp}:${callbackPort}/${callbackPath}`,
            "callbackHost": `${callbackIp}`,
            "callbackBody": "{\"filename\": ${object},\"bucket\": ${bucket},\"size\": ${size}}",
            "callbackBodyType": "application/json"
        }
        const callback = new Buffer(JSON.stringify(callbackBody)).toString('base64')
        
        return {
            Signature,
            policy,
            host,
            'OSSAccessKeyId': accessKeyId,
            'key': expireTime,
            'success_action_status': 200,
            dirPath: `${dirPath}/${moment().format('YYYYMMDD')}/`,
            callback
        }
    }
}
