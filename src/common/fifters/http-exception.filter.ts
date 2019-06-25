import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express'
import { ApiException } from '.';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const request: Request = ctx.getRequest();
    const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const errorResponse = {
      status: exception instanceof ApiException ? exception.getErrorCode() : status,
      message: exception.message.error || exception.message || null,
      timestamp: new Date().getTime(),
      path: request.protocol + '://' + request.hostname + request.originalUrl,
      ip: request.headers['x-forwarded-for']
    }
    
    Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorResponse), 'ExceptionFilter')
    if (status === HttpStatus.NOT_FOUND){
      return response.render('error', errorResponse)
    }
    
    response.status(status != HttpStatus.INTERNAL_SERVER_ERROR ? HttpStatus.OK : status).json(errorResponse);
  
  }
}