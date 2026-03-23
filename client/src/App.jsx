import { useState } from 'react';
import { AuthProvider, useAuth } from './AuthContext.jsx';
import LoginForm from './components/LoginForm.jsx';
import TaskList from './components/TaskList.jsx';
import TaskForm from './components/TaskForm.jsx';

function Shell() {
  const { token, logout } = useAuth();
  const [version, setVersion] = useState(0);

  if (!token) return <LoginForm />;

  return (
    <main className="shell">
      <header>
        <h1>TaskFlow Board</h1>
        <button onClick={logout}>Sign out</button>
      </header>
      <TaskForm onCreated={() => setVersion((v) => v + 1)} />
      <TaskList key={version} />
    </main>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
