import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CourseType } from '@graphql/objects';
import { CourseService } from '@modules/course/course.service';
import { CourseCreateDto, CourseUpdateDto } from '@/common/dto';

@Resolver('Course')
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Query(() => [CourseType], { name: 'courses' })
  async getCourses() {
    return this.courseService.findAll();
  }

  @Query(() => CourseType, { name: 'course' })
  async getCourse(@Args('id') id: number) {
    return this.courseService.findOne(id);
  }

  @Mutation(() => CourseType, { name: 'createCourse' })
  async create(@Args('course') course: CourseCreateDto) {
    return this.courseService.create(course);
  }

  @Mutation(() => CourseType, { name: 'updateCourse' })
  async update(
    @Args('id') id: number,
    @Args('course') course: CourseUpdateDto,
  ) {
    return this.courseService.update(id, course);
  }

  @Mutation(() => CourseType, { name: 'deleteCourse' })
  async delete(@Args('id') id: number) {
    return this.courseService.delete(id);
  }
}
