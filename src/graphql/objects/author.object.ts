import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthorType {
  @Field()
  name: string;

  @Field()
  resume: string;
}
