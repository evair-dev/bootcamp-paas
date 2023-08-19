import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, Min, IsOptional } from 'class-validator';
import { CreateTopicDto, UpdateTopicDto } from './topic.dto';

@InputType()
export class CreateModuleDto {
  @Field()
  @IsString()
  name: string;

  @Field({ defaultValue: 0 })
  @IsNumber()
  value: number;

  @Field()
  @IsNumber()
  @Min(0)
  max: number;

  @Field(() => [CreateTopicDto], { nullable: true })
  topics?: CreateTopicDto[];
}

@InputType()
export class UpdateModuleDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  value?: number;

  @Field({ nullable: true })
  @IsNumber()
  @Min(0)
  @IsOptional()
  max?: number;

  @Field(() => [UpdateTopicDto], { nullable: true })
  @IsOptional()
  topics?: UpdateTopicDto[];
}
