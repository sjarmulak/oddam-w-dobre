import React from "react";
import { Outlet, Link as NavLink } from "react-router-dom";
import "../scss/HomeFourSteps.scss";

export default function HomeFourSteps() {
  return (
    <section id="four-steps">
      <h1>Wystarczą cztery proste kroki</h1>
      <img
        src={require("../assets/Decoration.svg")}
        alt=""
        width="100px"
        height="50px"
      />
      <div className="four-steps">
        <div className="step">
          <img src="../assets/Icon-1.svg" alt="" width="50px" height="50px" />
          <span>Wybierz rzeczy</span>
          <hr />
          <span>ubrania, zabawki, sprzęt i inne</span>
        </div>
        <div className="step">
          <img src="../assets/Icon-1.svg" alt="" width="50px" height="50px" />
          <span>Spakuj je</span>
          <hr />
          <span>skorzystaj z worków na śmieci</span>
        </div>
        <div className="step">
          <img src="../assets/Icon-1.svg" alt="" width="50px" height="50px" />
          <span>Zdecyduj komu chcesz pomóc</span>
          <hr />
          <span>wybierz zaufane miejsce</span>
        </div>
        <div className="step">
          <img src="../assets/Icon-1.svg" alt="" width="50px" height="50px" />
          <span>Zamów kuriera</span>
          <hr />
          <span>kurier przyjedzie w dogodnym terminie</span>
        </div>
      </div>
      <NavLink to="/logowanie">
        <button>ODDAJ RZECZY</button>
      </NavLink>
    </section>
  );
}
