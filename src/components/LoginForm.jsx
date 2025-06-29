import { useState } from "react";
const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "teacher" && password === "12345") {
      onLogin(username);
    } else {
      alert("Invalid userName and");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}


        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const LogoutForm = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

const ExForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <LogoutForm username={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default ExForm;



