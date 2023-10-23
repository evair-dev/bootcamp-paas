import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TopicsModule } from '@/modules/topics/topics.module';
import { ModulesModule } from '@modules/modules/modules.module';
import { AuthorsModule } from '@modules/authors/authors.module';
import { CourseModule } from './modules/course/course.module';
import { CourseResolver } from '@graphql/resolvers/course.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TopicsModule,
    ModulesModule,
    AuthorsModule,
    CourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
