import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Request, Response } from 'express';
import { ApiCode } from '../enums/api-error.enum'
@Injectable()
export class ResultInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const now = Date.now();
    return next.handle().pipe(
      map((response) => {
        Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass().name)
        return {
          status: ApiCode.SUCCESS,
          data: response,
          message: 'success',
          timestamp: new Date().getTime()
        }
      })
    );
  }
}
