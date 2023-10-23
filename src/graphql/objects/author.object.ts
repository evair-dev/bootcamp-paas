import { ObjectType, Field } from '@nestjs/graphql';
import { CourseType } from './course.object';

@ObjectType()
export class AuthorType {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  resume: string;

  @Field(() => [CourseType], { nullable: true })
  courses: CourseType[];
}
