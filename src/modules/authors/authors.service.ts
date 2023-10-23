import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';

import { Author, Course } from '@database/entities';
import { AuthorCreateDto, AuthorUpdateDto } from '@/common/dto';

@Injectable()
export class AuthorService {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: Repository<Author>,
  ) {}

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne({ where: { id: id } });
  }

  create(author: AuthorCreateDto): Promise<Author> {
    console.log(author);
    console.log('------------------------');
    return this.authorRepository.save(author);
  }

  async update(id: number, author: AuthorUpdateDto): Promise<Author> {
    await this.authorRepository.update(id, author);
    return this.findOne(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.authorRepository.delete(id);
  }

  // Relation with Courses
  async getCourses(authorId: number): Promise<Course[]> {
    const author = await this.authorRepository.findOne({
      where: { id: authorId },
    });

    return author.courses;
  }
}
