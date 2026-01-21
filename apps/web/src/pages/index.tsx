const todos = [
  { id: 1, title: "Create your first to-do", done: false },
  { id: 2, title: "Check out the login page", done: true },
  { id: 3, title: "Sign up and start organizing", done: false }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Kite To-Do</p>
          <h1>Your To-Do app</h1>
          <p className="subtle">
            Simple tasks, clear priorities, and a clean workspace.
          </p>
        </div>
        <div className="actions">
          <a className="button" href="/login">
            Log in
          </a>
          <a className="button button-secondary" href="/signup">
            Sign up
          </a>
        </div>
      </header>

      <section className="card">
        <h2>Today</h2>
        <ul className="list">
          {todos.map((todo) => (
            <li key={todo.id} className="list-item">
              <span className={todo.done ? "done" : ""}>{todo.title}</span>
              <span className="pill">{todo.done ? "Done" : "Open"}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
