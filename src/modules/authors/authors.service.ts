import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Author } from '@database/entities';
import { AuthorDto } from '@/common/dto';
import { IAuthor } from '@interfaces/index';

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

  create(author: AuthorDto): Promise<Author> {
    return this.authorRepository.save(author);
  }

  async update(id: number, author: AuthorDto): Promise<Author> {
    await this.authorRepository.update(id, author);
    return this.findOne(id);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.authorRepository.delete(id);
  }
}
