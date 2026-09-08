# TaskFlow Board

Kanban-style task board with a REST API, JWT auth and a React client.

## Stack
- Node.js + Express REST API
- MongoDB + Mongoose
- React 18 + Vite client
- JWT auth, Zod validation, Jest + Supertest

## Getting started

```bash
npm install
cp .env.example .env
npm run seed
npm run dev        # API on :4000
npm run dev:client # client on :5173
```

## API

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST | /api/auth/signup | Create an account |
| POST | /api/auth/login | Exchange credentials for a JWT |
| GET | /api/tasks | List tasks (paginated, searchable) |
| POST | /api/tasks | Create a task |
| PATCH | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |
| POST | /api/tasks/:id/move | Move a task between columns |

## Testing

```bash
npm test
```

## License

MIT
