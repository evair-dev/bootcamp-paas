import { ObjectType, Field } from '@nestjs/graphql';
import { AuthorType } from './author.object';

@ObjectType()
export class CourseType {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => AuthorType)
  author: AuthorType;
}
