import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service'
import { UserSchema, VideoSchema } from './schema';
import { JwtStrategy } from './strategy/jwt.strategy'
import { UsersService, VideoService, OssService, IndexService} from './services'





@Global()
@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (ConfigService: ConfigService) => ({
                secret: ConfigService.jwtsecretkey,
                signOptions: {
                    expiresIn: ConfigService.jwtexpiresin,
                },
            }),
            inject: [ConfigService]
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (ConfigService: ConfigService) => ({
                uri: ConfigService.mongodbUri,
                useNewUrlParser: true
            }),
            inject: [ConfigService]
        }),
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
            { name: 'Video', schema: VideoSchema },
        ])
    ],
    providers: [
        JwtStrategy,
        UsersService,
        VideoService,
        OssService,
        IndexService
    ],
    exports: [
        UsersService,
        VideoService,
        OssService,
        IndexService
    ]
})
export class CommonModule { }
