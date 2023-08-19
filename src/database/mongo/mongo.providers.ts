import * as mongoose from 'mongoose';

export const mongoProvider = [
  {
    provide: 'DOCS_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/ovdeon'),
  },
];
