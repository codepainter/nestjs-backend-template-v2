import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { UserDetailsRequestBodyDto } from '@app/user/dtos/user-detail.request-body.dto';
import { UserDetailsQuery } from '@app/user/queries/user-detail/user-detail.query';
import { Body, Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Controller()
export class UserDetailsController {
  constructor(
    @InjectPinoLogger(UserDetailsController.name) readonly logger: PinoLogger,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('user.detail')
  getUser(@Body() body: UserDetailsRequestBodyDto) {
    this.logger.info('getUser()');
    this.logger.debug({ body }, 'Body');

    const query = new UserDetailsQuery({ id: body.id });

    return this.queryBus.execute(query);
  }
}
