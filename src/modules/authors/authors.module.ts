import { Module } from '@nestjs/common';
import { PostgresModule } from '@database/postgres/postgres.module';
import { AuthorResolver } from '@graphql/resolvers';
import { AuthorService } from './authors.service';
import { authorProviders } from './authors.providers';

@Module({
  imports: [PostgresModule],
  providers: [AuthorService, ...authorProviders, AuthorResolver],
})
export class AuthorsModule {}
