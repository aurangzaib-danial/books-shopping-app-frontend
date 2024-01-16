export default function Page() {
  return (
    <main className="auth">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="auth-field" autoFocus />
        </div>

        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="auth-field" />
        </div>

        <button type="submit" className="primary-button">Sign in</button>
      </form>
    </main>
  );
}
