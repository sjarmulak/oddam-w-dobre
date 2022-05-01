import React from "react";
import "../scss/HomeContact.scss";
import Decoration from "../assets/Decoration.svg";
import { useState, useEffect } from "react";

export default function HomeContact() {
  const API_URL = "https://fer-api.coderslab.pl/v1/portfolio/contact";

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e, field) => {
    let fields = formValues;
    fields[field] = e.target.value;
    setFormValues((prevState) => ({
      ...prevState,
      field: e.target.value, // podstawiamy zmienioną wartość
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formValues),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.status === "success") {
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          }
          console.log(data);
        })
        .catch((err) => console.log(err));
      alert("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
    } else {
      alert("Nieprawidłowe pola w formularzu!");
    }
  };

  const handleValidation = () => {
    let fields = formValues;
    let errors = {};
    let formIsValid = true;

    console.log(fields);

    //name
    if (!fields.name) {
      formIsValid = false;
      errors.name = "Imię nie moze być puste";
    }

    if (fields.name.indexOf(" ") >= 0) {
      formIsValid = false;
      errors.name = "Imię musi być jednym wyrazem";
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

    //message
    if (!fields.message) {
      formIsValid = false;
      errors.message = "Wiadomość nie moze być pusta";
    }

    if (fields.message.length < 120) {
      formIsValid = false;
      errors.message = "Wiadomość musi mieć conajmniej 120 znaków";
    }

    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-info">
          <h1>Skontaktuj się z nami</h1>
          <img src={Decoration} alt="" width="100px" height="50px" />
          {success ? <p>Udało się!</p> : ""}
          <form noValidate action="" onSubmit={formSubmit}>
            <label>Wpisz swoje imię</label>
            <input
              id="name"
              type="text"
              placeholder="Krzysztof"
              onChange={(e) => handleChange(e, "name")}
              value={formValues["name"]}
            />
            <span style={{ color: "red" }}>{errors.name}</span>

            <label>Wpisz swój email</label>
            <input
              id="email"
              type="email"
              placeholder="abc@xyz.com"
              onChange={(e) => handleChange(e, "email")}
              value={formValues["email"]}
            />
            <span style={{ color: "red" }}>{errors.email}</span>
            <label>Wpisz swoją wiadomość</label>
            <textarea
              name=""
              id="message"
              cols="50"
              rows="5"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              onChange={(e) => handleChange(e, "message")}
              value={formValues["message"]}
            ></textarea>
            <button>Wyślij</button>
          </form>
        </div>
      </div>
    </section>
  );
}
