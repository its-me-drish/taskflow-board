import { useEffect, useState } from 'react';
import { api } from '../api.js';

export default function TaskList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/tasks').then((data) => setItems(data.items ?? data)).finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading tasks…</p>;
  if (!items.length) return <p>No tasks yet.</p>;

  return (
    <ul className="task-list">
      {items.map((item) => (
        <li key={item._id}>
          <strong>{item.title}</strong>
          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
}
