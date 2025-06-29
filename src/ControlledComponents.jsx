
import { useState } from "react";

const Validation = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;



    if (name.length < 5) {
      setNameError("name must be at least 5 characters");
      valid = false;
    }

    if (pwd.length < 4) {
      setPwdError("password must be at least 5 characters");
      valid = false;
    }

    if (valid) {
      console.log({ name, pwd });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "pwd") {
      setPwd(value);
    }
  };

  return (
    <div>
      <h1>form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: 
          <input type="text" value={name} name="name" onChange={handleChange} />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>
        <div>
          Password: 
          <input type="text" value={pwd} name="pwd" onChange={handleChange} />
          {pwdError && <p style={{ color: "red" }}>{pwdError}</p>}
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Validation;
