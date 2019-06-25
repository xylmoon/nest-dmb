import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import * as moment from 'moment'
export function IsStrDate(property?: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "isStrDate",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    // const [relatedPropertyName] = args.constraints;
                    // const relatedValue = (args.object as any)[relatedPropertyName];
                    return moment(value).isValid()
                }
            }
        });
    };
}