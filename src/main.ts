import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/fifters';
import { ValidationPipe } from './common/pipe';
import { ResultInterceptor } from './common/interceptor'
import { ConfigService } from './config/config.service';
import { join } from 'path';
import * as history from 'connect-history-api-fallback';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port = config.port || 5000;
  app.setGlobalPrefix('/api/dmb/v2');
  app.enableCors();
  app.use(history({
    rewrites: [{
      from: '/public/',
      to(context) {
        return context.parsedUrl.pathname;
      }
    },
    { from: '/', to: '/public/dmb/' }
    ]
  }));

  // view engine setup
  app.set('views', join(__dirname,'..', 'views'));
  app.set('view engine', 'html');
  app.engine('html', require('express-art-template'))

  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/public/', });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new ResultInterceptor());
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`)
}
bootstrap();
