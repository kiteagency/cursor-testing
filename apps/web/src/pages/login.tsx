export default function LoginPage() {
  return (
    <main className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1>Log in</h1>
          <p className="subtle">
            Access your tasks and pick up where you left off.
          </p>
        </div>
        <a className="button button-secondary" href="/signup">
          Need an account?
        </a>
      </header>

      <section className="card">
        <form className="form">
          <label className="field">
            Email
            <input type="email" name="email" placeholder="you@kite.com" />
          </label>
          <label className="field">
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>
          <button className="button" type="button">
            Log in
          </button>
        </form>
      </section>
    </main>
  );
}
