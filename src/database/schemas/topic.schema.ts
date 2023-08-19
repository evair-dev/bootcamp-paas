import { Schema } from 'mongoose';

export const TopicSchema = new Schema({
  topicName: { type: String, required: true },
  completedDate: { type: Date, required: false },
  status: {
    type: String,
    enum: ['done', 'to-do', 'in-progress'],
    required: true,
  },
});
