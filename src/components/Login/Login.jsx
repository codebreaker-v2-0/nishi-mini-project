import "./index.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-card">
        <h1 className="login-title">Daily Mood Tracker</h1>

        <div className="login-input-container">
          <label htmlFor="username" className="login-label">
            USERNAME
          </label>
          <input id="username" type="text" className="login-input" />
        </div>

        <div className="login-input-container">
          <label htmlFor="password" className="login-label">
            PASSWORD
          </label>
          <input id="password" type="text" className="login-input" />
        </div>

        <div className="login-checkbox-container">
          <input
            id="show-password"
            type="checkbox"
            className="login-checkbox"
          />
          <label htmlFor="show-password" className="login-checkbox-label">
            Show Password
          </label>
        </div>

        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
