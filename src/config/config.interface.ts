export interface EnvConfig {
    NODE_ENV: string;
    PORT: number;
    MONGODB_URI: string;
    MONGODB_USER: string;
    MONGODB_PWD: string;
    JWT_SECRETKEY: string;
    JWT_EXPIRESIN: string;
    OSS_DIRPATH: string;
    OSS_BUCKET: string;
    OSS_REGION: string;
    OSS_ENDPOINT: string;
    OSS_CNAME: boolean;
    OSS_ACCESSKEYID: string;
    OSS_ACCESSKEYSECRET: string;
    OSS_CALLBACKIP: string;
    OSS_CALLBACKPORT: number;
    OSS_CALLBACKPATH: string;
    OSS_EXPAFTER: number;
    OSS_MAXSIZE: number;
    [prop: string]: any;
}