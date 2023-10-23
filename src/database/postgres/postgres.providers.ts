import { dataSource as source } from '@/config/orm.config';

export const postgresProvider = [
  {
    provide: 'DB_CONNECTION',
    useFactory: async () => {
      const dataSource = source;

      return dataSource.initialize();
    },
  },
];
