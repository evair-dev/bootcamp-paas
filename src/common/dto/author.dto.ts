import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthorDto {
  @Field()
  name: string;

  @Field()
  resume: string;
}
