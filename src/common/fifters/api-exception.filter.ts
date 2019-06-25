import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiCode } from '../enums/api-error.enum';

export class ApiException extends HttpException {

  private errorMessage: string;
  private errorCode: ApiCode;

  constructor(message: string, code: ApiCode, ) {
    super(message, HttpStatus.OK);
    this.errorMessage = message;
    this.errorCode = code;
  }

  getErrorCode(): ApiCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}