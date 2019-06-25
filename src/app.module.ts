import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'

import { SharedModule } from './shared/shared.module';
import { CommonModule } from './common/common.module'
import { ControllersModule } from './controllers/controllers.module';
@Module({
  imports: [
    CommonModule,
    ControllersModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService]

})
export class AppModule { }
