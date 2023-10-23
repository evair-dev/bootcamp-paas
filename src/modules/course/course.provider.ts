import { DataSource } from 'typeorm';
import { Course } from '@database/entities';

export const courseProvider = [
  {
    provide: 'COURSE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Course),
    inject: ['DB_CONNECTION'],
  },
];
