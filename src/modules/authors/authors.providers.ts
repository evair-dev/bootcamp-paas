import { DataSource } from 'typeorm';
import { Author } from '@database/entities';

export const authorProviders = [
  {
    provide: 'AUTHOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Author),
    inject: ['DB_CONNECTION'],
  },
];
