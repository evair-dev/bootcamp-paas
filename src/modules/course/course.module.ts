import { Module } from '@nestjs/common';

import { PostgresModule } from '@database/postgres/postgres.module';
import { CourseResolver } from '@graphql/resolvers/course.resolver';
import { CourseService } from './course.service';
import { courseProvider } from './course.provider';

@Module({
  imports: [PostgresModule],
  providers: [CourseService, ...courseProvider, CourseResolver],
})
export class CourseModule {}
