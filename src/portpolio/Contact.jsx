
import { useState } from "react";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setNameError("");
    setPwdError("");
    setEmailError("");
    setMobileNumberError("");

    if (name.length < 4) {
      setNameError("Name must be at least 4 characters");
      valid = false;
    }

    if (pwd.length < 6) {
      setPwdError("Password must be at least 6 characters");
      valid = false;
    }

    if (!email.includes("@")) {
      setEmailError("Email must contain '@'");
      
      valid = false;
    }

    const regex = /^\+91\s[6-9]\d{9}$/;
    if (!regex.test(mobileNumber)) {
      setMobileNumberError("Invalid mobile number format");
      valid = false;
    }

    if (valid) {
      console.log({ name, pwd, email, mobileNumber });
      
    }
  };

  return (
    <div className="container">
      <h1>This is Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p style={{ color: "red" }}>{nameError}</p>
        </div>

        <div>
          Password:{" "}
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <p style={{ color: "red" }}>{pwdError}</p>
        </div>

        <div>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p style={{ color: "red" }}>{emailError}</p>
        </div>

        <div>
          Number:{" "}
          <input
            type="text"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <p style={{ color: "red" }}>{mobileNumberError}</p>
        </div>

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
