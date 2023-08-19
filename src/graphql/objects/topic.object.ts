import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TopicType {
  @Field()
  topicName: string;

  @Field({ nullable: true })
  completedDate?: Date;
}
