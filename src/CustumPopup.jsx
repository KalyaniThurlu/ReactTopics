
import { useState } from "react";

const CustumPop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [nameError, setNameError] = useState("");
  const [pwdError, setPwdError] = useState("");

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError("");
    setPwdError("");

    let valid = true;

    if (name.length < 3) {
      setNameError("Name must be at least 3 characters");
      valid = false;
    }

    if (pwd.length < 6) {
      setPwdError("Password must be at least 6 characters");
      valid = false;
    }

    if (valid) {
      console.log({ name, email, pwd });
      setName("");
      setEmail("");
      setPwd("");
      setIsOpen(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>This is a custom popup example</h1>
      <button onClick={openPopup}>Open Popup</button>
      <button onClick={closePopup}>Close Popup</button>

      {isOpen && (
        <div
          style={{
            background: "#f8f9fa",
            border: "1px solid #ccc",
            padding: "20px",
            marginLeft: "20px",
            marginTop: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "300px",
            position: "relative",
          }}
        >
          <button
            onClick={closePopup}
            style={{
              fontSize: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            &times;
          </button>

          <p>This is the popup content!</p>

          <form onSubmit={handleSubmit}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ display: "block", marginBottom: "5px", width: "100%" }}
            />
            {nameError && <small style={{ color: "red" }}>{nameError}</small>}
            <br />

            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ display: "block", marginBottom: "10px", width: "100%" }}
            />

            Password:
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              style={{ display: "block", marginBottom: "5px", width: "100%" }}
            />
            {pwdError && <small style={{ color: "red" }}>{pwdError}</small>}
            <br />

            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustumPop;
