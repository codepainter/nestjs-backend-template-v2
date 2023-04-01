import { join, resolve } from 'path';

import { ApiPostgresModule } from '@app/database/api-postgres/api-postgres.module';
import { HealthModule } from '@app/health';
import { LoggerModule } from '@app/logger';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV !== 'production'
          ? resolve(join(process.cwd(), 'apps/api-service', '.env'))
          : undefined,
    }),
    AppConfigModule,
    LoggerModule.init({
      exclude: ['health'],
    }),
    ApiPostgresModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
