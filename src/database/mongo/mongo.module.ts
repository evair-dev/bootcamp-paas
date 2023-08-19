import { Module } from '@nestjs/common';
import { mongoProvider } from './mongo.providers';

@Module({
  providers: [...mongoProvider],
  exports: [...mongoProvider],
})
export class MongoModule {}
