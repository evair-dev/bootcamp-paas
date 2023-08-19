import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';
import { CreateModuleDto, UpdateModuleDto } from './module.dto';

@InputType()
export class CreateCourseDto {
  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  completedDate?: Date;

  @Field()
  @IsNumber()
  progressPercentage: number;

  @Field(() => [CreateModuleDto], { nullable: true })
  modules?: CreateModuleDto[];
}

@InputType()
export class UpdateCourseDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsDate()
  @IsOptional()
  completedDate?: Date;

  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  progressPercentage?: number;

  @Field(() => [UpdateModuleDto], { nullable: true })
  @IsOptional()
  modules?: UpdateModuleDto[];
}
