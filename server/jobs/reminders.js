import Task from '../models/Task.js';

export async function dueSoon(withinHours = 24) {
  const until = new Date(Date.now() + withinHours * 3600_000);
  return Task.find({ status: { $ne: 'done' }, dueDate: { $lte: until, $gte: new Date() } }).populate('owner', 'email name');
}
