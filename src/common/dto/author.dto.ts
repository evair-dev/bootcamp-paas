import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class AuthorCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  resume: string;
}

@InputType()
export class AuthorUpdateDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  resume: string;
}
