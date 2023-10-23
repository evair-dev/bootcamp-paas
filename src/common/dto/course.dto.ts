import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsInt } from 'class-validator';

@InputType()
export class CourseCreateDto {
  @Field()
  @IsInt()
  authorId: number;

  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  description: string;
}

@InputType()
export class CourseUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  description?: string;
}
