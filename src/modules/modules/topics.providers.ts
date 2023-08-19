import { Connection } from 'mongoose';
import { TopicSchema } from '@database/schemas';

export const topicsProviders = [
  {
    provide: 'TOPIC_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Topic', TopicSchema),
    inject: ['DOCS_CONNECTION'],
  },
];
