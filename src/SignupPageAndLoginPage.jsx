
import { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [hideEmail, setHideEmail] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault(); 
    console.log({ name, password, email });
  };

  const login = (e) => {
    e.preventDefault();
    setHideEmail(true);
    alert("login successfully")
  };

  return (
    <div>
      <h1>Hello</h1>
      <form>
        Name:
        <input
          type="text"
        
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {!hideEmail && (
          <>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </>
        )}
      </form>
      <button onClick={handleSignup}>{name ? "submit" : "Signup"}</button>
      <button onClick={login}>{name ? "submit" : "Login"}</button>
    </div>
  );
};

export default SignupPage;
