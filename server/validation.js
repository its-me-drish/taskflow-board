import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1).max(160),
  status: z.enum(['todo', 'doing', 'done']).default('todo'),
  priority: z.number().int().min(1).max(5).default(3),
});

export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(422).json({ error: parsed.error.issues });
  req.body = parsed.data;
  next();
};
