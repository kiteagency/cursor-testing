export default function SignupPage() {
  return (
    <main className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Join Kite</p>
          <h1>Create your account</h1>
          <p className="subtle">
            Start organizing your day in minutes.
          </p>
        </div>
        <a className="button button-secondary" href="/login">
          Already have an account?
        </a>
      </header>

      <section className="card">
        <form className="form">
          <label className="field">
            Name
            <input type="text" name="name" placeholder="Alex Kite" />
          </label>
          <label className="field">
            Email
            <input type="email" name="email" placeholder="you@kite.com" />
          </label>
          <label className="field">
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>
          <button className="button" type="button">
            Sign up
          </button>
        </form>
      </section>
    </main>
  );
}
