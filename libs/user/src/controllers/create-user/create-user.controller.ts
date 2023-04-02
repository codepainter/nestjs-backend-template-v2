import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

import { CreateUserCommand } from '@app/user/commands/create-user/create-user.command';
import { CreateUserRequestBodyDto } from '@app/user/dtos/create-user.request-body.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Controller()
export class CreateUserController {
  constructor(
    @InjectPinoLogger(CreateUserController.name)
    private readonly logger: PinoLogger,
    private readonly commandBus: CommandBus,
  ) {}

  @Post('user.create')
  async createUser(@Body() body: CreateUserRequestBodyDto) {
    this.logger.info('createUser()');
    this.logger.debug({ body }, 'Body');

    const command = new CreateUserCommand(body);

    return this.commandBus.execute(command);
  }
}