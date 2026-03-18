import { useState } from 'react';
import { api } from '../api.js';

export default function TaskForm({ onCreated }) {
  const [title, setTaskTitle] = useState('');
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    try {
      const created = await api.post('/tasks', { title });
      onCreated?.(created);
      setTaskTitle('');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="task-form">
      <input value={title} onChange={(e) => setTaskTitle(e.target.value)} placeholder="New task" />
      <button disabled={busy || !title.trim()}>Add</button>
    </form>
  );
}
