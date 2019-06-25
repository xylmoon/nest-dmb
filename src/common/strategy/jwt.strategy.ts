import { ExtractJwt, Strategy } from 'passport-jwt';

import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../services'
import { ConfigService } from '../../config/config.service'


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly UsersService: UsersService,
        private readonly ConfigService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: `${ConfigService.jwtsecretkey}`,
        });
    }

    async validate(payload: any )  {
        const user = await this.UsersService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException();
        }
        return {
            payload,
            user
        };
    }
}