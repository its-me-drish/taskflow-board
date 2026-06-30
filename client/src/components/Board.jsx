import { useEffect, useState } from 'react';
import { api } from '../api.js';

const COLUMNS = ['todo', 'doing', 'done'];

export default function Board() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => { api.get('/tasks?limit=100').then((d) => setTasks(d.items)); }, []);

  async function move(id, status) {
    setTasks((cur) => cur.map((t) => (t._id === id ? { ...t, status } : t)));
    await api.post(`/tasks/${id}/move`, { status });
  }

  return (
    <div className="board">
      {COLUMNS.map((col) => (
        <section key={col} onDragOver={(e) => e.preventDefault()} onDrop={(e) => move(e.dataTransfer.getData('id'), col)}>
          <h2>{col}</h2>
          {tasks.filter((t) => t.status === col).map((t) => (
            <article key={t._id} draggable onDragStart={(e) => e.dataTransfer.setData('id', t._id)}>{t.title}</article>
          ))}
        </section>
      ))}
    </div>
  );
}
