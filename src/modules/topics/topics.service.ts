import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { ITopic } from 'src/common/interfaces';
import { CreateTopicDto, UpdateTopicDto } from 'src/common/dto';

@Injectable()
export class TopicsService {
  constructor(
    @Inject('TOPIC_MODEL')
    private readonly topicModel: Model<ITopic>,
  ) {}

  async findAll() {
    return await this.topicModel.find().exec();
  }

  async findOne(id: string) {
    return await this.topicModel.findOne({ _id: id }).exec();
  }

  async create(topic: CreateTopicDto) {
    const createdTopic = new this.topicModel(topic);
    return createdTopic.save();
  }

  async update(id: string, topic: UpdateTopicDto) {
    return this.topicModel.findByIdAndUpdate(id, topic, { new: true }).exec();
  }

  async delete(id: string) {
    return this.topicModel.findByIdAndDelete(id).exec();
  }
}
