import { useState } from "react";
import "./App.css";

function App() {
  // Email ki value store karega
  const [email, setEmail] = useState("");

  // Password ki value store karega
  const [password, setPassword] = useState("");

  // Remember me checkbox
  const [rememberMe, setRememberMe] = useState(false);

  // Sign in par chalega
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);

    alert(`Login successful for ${email}`);
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Heading */}
        <h1>Welcome back</h1>

        <p className="subtitle">
          Please enter your details
        </p>

        {/* Google Button */}
        <button
          type="button"
          className="google-btn"
          onClick={() => alert("Google Sign In")}
        >
          <span className="google-icon">G</span>
          Sign in with Google
        </button>

        {/* OR */}
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">
              Email address
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="options">

            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <span>Remember for 30 days</span>
            </label>

            <button
              type="button"
              className="forgot-btn"
              onClick={() => alert("Forgot password")}
            >
              Forgot password?
            </button>

          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="signin-btn"
          >
            Sign in
          </button>

        </form>

        {/* Sign Up */}
        <p className="signup-text">
          Don't have an account?

          <button
            type="button"
            className="signup-btn"
            onClick={() => alert("Sign up")}
          >
            Sign up
          </button>
        </p>

      </div>

    </div>
  );
}

export default App;