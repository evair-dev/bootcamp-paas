import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorType } from '@graphql/objects';
import { AuthorService } from '@modules/authors/authors.service';
import { AuthorDto } from '@/common/dto';

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorType], { name: 'authors' })
  async getAuthors() {
    return this.authorService.findAll();
  }

  @Query(() => AuthorType, { name: 'author' })
  async getAuthor(@Args('id') id: number) {
    return this.authorService.findOne(id);
  }

  @Mutation(() => AuthorType, { name: 'createAuthor' })
  async create(@Args('author') author: AuthorDto) {
    return this.authorService.create(author);
  }

  @Mutation(() => AuthorType, { name: 'updateAuthor' })
  async update(@Args('id') id: number, @Args('author') author: AuthorDto) {
    return this.authorService.update(id, author);
  }

  @Mutation(() => AuthorType, { name: 'deleteAuthor' })
  async delete(@Args('id') id: number) {
    return this.authorService.delete(id);
  }
}
