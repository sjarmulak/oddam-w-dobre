import React, { useState, useEffect } from "react";
import Decoration from "../assets/Decoration.svg";
import "../scss/Login.scss";

export default function Login() {
  const [loginValues, setLoginValues] = useState({
    login_email: "",
    login_password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      localStorage.setItem("email", loginValues.login_email);
      localStorage.setItem("password", loginValues.login_password);
      console.log("Successfully registered");
    } else {
      console.log("Error");
    }
  };

  const handleChange = (e, field) => {
    let fields = loginValues;
    fields[field] = e.target.value;
    setLoginValues((prevState) => ({
      ...prevState,
      field: e.target.value, // podstawiamy zmienioną wartość
    }));
  };

  const handleValidation = () => {
    let fields = loginValues;
    let errors = {};
    let formIsValid = true;

    console.log(fields);

    //password
    if (!fields.name) {
      formIsValid = false;
      errors.name = "Hasło nie moze być puste";
    }

    //email
    if (!fields.email) {
      formIsValid = false;
      errors.email = "Email nie moze być pusty";
    }

    if (!fields.email.includes("@")) {
      formIsValid = false;
      errors.email = "Email musi mieć @";
    }

    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <section id="login">
      <div className="container">
        <h1>Zaloguj się</h1>
        <img className="decoration" src={Decoration} alt="" width="250px" />
        <form noValidate action="" onSubmit={loginSubmit}>
          <div className="login_form">
            <div className="login_email">
              <label>E-mail</label>
              <input
                id="login_email"
                type="email"
                placeholder=""
                onChange={(e) => handleChange(e, "login_email")}
                value={loginValues["login_email"]}
              />
              <span style={{ color: "red" }}>{errors.email}</span>
            </div>

            <div className="login_password">
              <label>Hasło</label>
              <input
                id="login_password"
                type="password"
                placeholder=""
                onChange={(e) => handleChange(e, "login_password")}
                value={loginValues["login_password"]}
              />
              <span style={{ color: "red" }}>{errors.password}</span>
            </div>
          </div>
          <button>
            <a href="/">Zaloguj się</a>
          </button>
        </form>
      </div>
    </section>
  );
}
