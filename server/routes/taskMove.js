import { Router } from 'express';
import Task from '../models/Task.js';
import Activity from '../models/Activity.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.post('/:id/move', requireAuth, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, owner: req.user.sub });
  if (!task) return res.status(404).json({ error: 'not found' });
  const from = task.status;
  task.status = req.body.status;
  await task.save();
  await Activity.create({ owner: req.user.sub, task: task._id, from, to: task.status });
  res.json(task);
});

export default router;
