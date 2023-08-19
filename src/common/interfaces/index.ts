import { Author } from '@database/entities';

export interface ITopic extends Document {
  topicName: string;
  completedDate?: Date;
  status: 'done' | 'to-do' | 'in-progress';
}

export interface IModule extends Document {
  name: string;
  value: number;
  max: number;
  topics: ITopic[];
}

export interface ICourse extends Document {
  name: string;
  completedDate?: Date;
  progressPercentage: number;
  modules: IModule[];
}

export type IAuthor = InstanceType<typeof Author>;
