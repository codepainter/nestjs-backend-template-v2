import { PinoLogger } from 'nestjs-pino';

import { IEventHandler } from '@nestjs/cqrs';

export abstract class EventHandlerBase<TEvent>
  implements IEventHandler<TEvent>
{
  constructor(readonly logger: PinoLogger) {}

  abstract handleEvent(event: TEvent): Promise<void>;

  async handle(event: TEvent): Promise<void> {
    this.logger.info('handle()');
    this.logger.debug({ event }, 'Event');
    try {
      return await this.handleEvent(event);
    } catch (error) {
      this.logger.error({ error }, 'Event Handler Error Caught');
      throw error;
    }
  }
}
