import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { TopicStatus } from '@/common/enums';

registerEnumType(TopicStatus, { name: 'TopicStatus' });

@InputType()
export class CreateTopicDto {
  @Field()
  @IsString()
  topicName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  completedDate?: Date;

  @Field(() => TopicStatus)
  @IsEnum(TopicStatus)
  status: TopicStatus;
}

@InputType()
export class UpdateTopicDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  topicName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @Field(() => TopicStatus, { nullable: true })
  @IsOptional()
  @IsEnum(TopicStatus)
  status?: TopicStatus;
}
