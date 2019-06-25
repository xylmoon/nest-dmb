import { Module } from '@nestjs/common';
import { UsersController, VideoController, IndexController, OssController} from '.'
import { PassportModule } from '@nestjs/passport';



@Module({
    imports:[
        PassportModule.register({ defaultStrategy: 'jwt' })
    ],
    controllers:[
        UsersController,
        VideoController,
        OssController,
        IndexController
    ]
})
export class ControllersModule {}
