import { Module, Provider } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CreateUserCommandHandler } from './commands/create-user/create-user.command-handler';
import { CreateUserController } from './controllers/create-user/create-user.controller';
import { UserCreatedEventHandler } from './domains/events/user-created/user-created.event-handler';
import { UserAggregateFactory } from './domains/user.factory';
import { UserWriteRepository } from './repositories/user.write-repository';
import {
  USER_AGGREGATE_FACTORY,
  USER_WRITE_REPOSITORY,
} from './user.constants';

const Domains: Provider[] = [
  {
    provide: USER_AGGREGATE_FACTORY,
    useClass: UserAggregateFactory,
  },
];

const EventHandlers: Provider[] = [UserCreatedEventHandler];

const CommandHandlers: Provider[] = [CreateUserCommandHandler];

const Repositories: Provider[] = [
  {
    provide: USER_WRITE_REPOSITORY,
    useClass: UserWriteRepository,
  },
];

@Module({
  imports: [CqrsModule],
  providers: [
    ...Domains,
    ...EventHandlers,
    ...CommandHandlers,
    ...Repositories,
  ],
  controllers: [CreateUserController],
})
export class UserModule {}
