import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';

import { Course } from '@entities/course.entity';
import { CourseCreateDto, CourseUpdateDto } from '@/common/dto';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSE_REPOSITORY')
    private courseRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.courseRepository.findOne({ where: { id: id } });
  }

  create(course: CourseCreateDto): Promise<Course> {
    console.log(course);
    console.log('-------------3-----------');
    return this.courseRepository.save(course);
  }

  async update(id: number, course: CourseUpdateDto): Promise<Course> {
    await this.courseRepository.update(id, course);
    return this.findOne(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.courseRepository.delete(id);
  }
}
