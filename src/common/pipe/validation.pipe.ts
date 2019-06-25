import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpCode, HttpStatus } from '@nestjs/common';
import { validate, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {
    if (value instanceof Object && this.isEmoty(value)) {
      throw new HttpException('拜托了，亲，传点东西吧', HttpStatus.BAD_REQUEST)
    }
    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);

    const errors = await validate(object, {
      //验证器将跳过验证对象缺少的字段
      skipMissingProperties: true
    });
    if (errors.length > 0) {
      throw new HttpException(`大兄弟你参数错了：${this.formatErrors(errors)}`, HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }

  private formatErrors(errors: any[]) {
    return errors.map(error => {
      for (let property in error.constraints) {
        return error.constraints[property];
      }
    }).join(', ')
  }

  private isEmoty(value: any) {
    if (Object.keys(value).length > 0) {
      return false;
    }
    return true
  }
}