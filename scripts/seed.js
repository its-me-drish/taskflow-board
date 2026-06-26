import { connectDb } from '../server/db.js';
import User from '../server/models/User.js';
import Task from '../server/models/Task.js';

await connectDb();
await Task.deleteMany({});
await User.deleteMany({});

const user = await User.create({ email: 'demo@taskflow-board.dev', name: 'Demo', passwordHash: await User.hash('demo1234') });
await Task.insertMany(["Write project brief","Set up CI pipeline","Design board columns"].map((title) => ({ title, owner: user._id })));

console.log('seeded');
process.exit(0);
