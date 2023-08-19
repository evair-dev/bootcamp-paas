import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TopicsService } from '@/modules/topics/topics.service';
import { TopicType } from '@/graphql/objects';
import { CreateTopicDto, UpdateTopicDto } from '@/common/dto';

@Resolver('Topic')
export class TopicResolver {
  constructor(private readonly topicService: TopicsService) {}

  @Query(() => [TopicType], { name: 'topics' })
  async getTopics(): Promise<TopicType[]> {
    return this.topicService.findAll();
  }

  @Query(() => TopicType, { name: 'topic' })
  async getTopic(@Args('id') id: string): Promise<TopicType> {
    return this.topicService.findOne(id);
  }

  @Mutation(() => TopicType, { name: 'createTopic' })
  async create(@Args('topic') topic: CreateTopicDto): Promise<TopicType> {
    return this.topicService.create(topic);
  }

  @Mutation(() => TopicType, { name: 'updateTopic' })
  async update(
    @Args('id') id: string,
    @Args('topic') topic: UpdateTopicDto,
  ): Promise<TopicType> {
    return this.topicService.update(id, topic);
  }

  @Mutation(() => TopicType, { name: 'deleteTopic' })
  async delete(@Args('id') id: string): Promise<TopicType> {
    return this.topicService.delete(id);
  }
}
