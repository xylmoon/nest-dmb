import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';

import { EnvConfig } from './config.interface'
import { OssConfig } from '../common/interfaces';

export class ConfigService {
    private readonly envConfig: EnvConfig;


    constructor(filePath: string) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);
    }

    private validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid(['development', 'production', 'test', 'provision'])
                .default('development'),

            PORT: Joi.number().default(3000),
            MONGODB_URI: Joi.string(),
            MONGODB_USER: Joi.string().default('root'),
            MONGODB_PWD: Joi.string(),
            JWT_SECRETKEY: Joi.string(),
            JWT_EXPIRESIN: Joi.string(),
            OSS_DIRPATH: Joi.string(),
            OSS_BUCKET: Joi.string(),
            OSS_REGION: Joi.string(),
            OSS_ENDPOINT: Joi.string(),
            OSS_CNAME: Joi.boolean(),
            OSS_ACCESSKEYID: Joi.string(),
            OSS_ACCESSKEYSECRET: Joi.string(),
            OSS_CALLBACKIP: Joi.string(),
            OSS_CALLBACKPORT: Joi.number().default(80),
            OSS_CALLBACKPATH: Joi.string(),
            OSS_EXPAFTER: Joi.number().default(60000),
            OSS_MAXSIZE: Joi.number().default(1048576000),
        });

        const { error, value: validatedEnvConfig } = Joi.validate(
            envConfig,
            envVarsSchema,
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }

    get env(): string {
        return this.envConfig.NODE_ENV;
    }

    get port(): number {
        return this.envConfig.PORT;
    }

    get mongodbUri(): string {
        return this.envConfig.MONGODB_URI;
    }
    get mongodbUser(): string {
        return this.envConfig.MONGODB_USER;
    }
    get mongodbPassword(): string {
        return this.envConfig.MONGODB_PWD;
    }
    get jwtsecretkey(): string {
        return this.envConfig.JWT_SECRETKEY
    }
    get jwtexpiresin(): string {
        return this.envConfig.JWT_EXPIRESIN
    }
    get ossConfig(): OssConfig {
        let {
            OSS_DIRPATH: dirPath,
            OSS_BUCKET: bucket,
            OSS_REGION: region,
            OSS_ENDPOINT: endpoint,
            OSS_CNAME: cname,
            OSS_ACCESSKEYID: accessKeyId,
            OSS_ACCESSKEYSECRET: accessKeySecret,
            OSS_CALLBACKIP: callbackIp,
            OSS_CALLBACKPORT: callbackPort,
            OSS_CALLBACKPATH: callbackPath,
            OSS_EXPAFTER: expAfter,
            OSS_MAXSIZE: maxSize
        } = this.envConfig
        return {
            dirPath,
            bucket,
            region,
            endpoint,
            cname,
            accessKeyId,
            accessKeySecret,
            callbackIp,
            callbackPort,
            callbackPath,
            expAfter,
            maxSize
        }
    }
}