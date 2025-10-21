import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    status: { type: String, enum: ['todo', 'doing', 'done'], default: 'todo' },
    priority: { type: Number, min: 1, max: 5, default: 3 },
    dueDate: Date,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
