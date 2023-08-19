import { Module } from '@nestjs/common';
import { MongoModule } from '@database/mongo/mongo.module';
import { TopicResolver } from '@/graphql/resolvers';
import { TopicsService } from './topics.service';
import { topicsProviders } from './topics.providers';

@Module({
  imports: [MongoModule],
  providers: [TopicsService, ...topicsProviders, TopicResolver],
})
export class TopicsModule {}
