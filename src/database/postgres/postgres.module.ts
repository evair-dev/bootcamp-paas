import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { postgresProvider } from './postgres.providers';

@Module({
  imports: [ConfigModule],
  providers: [...postgresProvider],
  exports: [...postgresProvider],
})
export class PostgresModule {}
