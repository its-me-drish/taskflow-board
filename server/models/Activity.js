import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  task: { type: mongoose.Schema.Types.ObjectId, ref: 'Task' },
  from: String,
  to: String,
}, { timestamps: true });

export default mongoose.model('Activity', activitySchema);
