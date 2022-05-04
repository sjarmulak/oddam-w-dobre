import React from "react";
import { Outlet, Link as NavLink } from "react-router-dom";
import "../scss/HomeFourSteps.scss";
import Decoration from "../assets/Decoration.svg";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";

export default function HomeFourSteps() {
  return (
    <section id="four-steps">
      <h1>Wystarczą cztery proste kroki</h1>
      <img className="decoration" src={Decoration} alt="" width="250px" />

      <div className="four-steps">
        <div className="step">
          <img src={Icon1} alt="" width="80px" />
          <span>Wybierz rzeczy</span>
          <hr />
          <span>ubrania, zabawki, sprzęt i inne</span>
        </div>
        <div className="step">
          <img src={Icon2} alt="" width="80px" />
          <span>Spakuj je</span>
          <hr />
          <span>skorzystaj z worków na śmieci</span>
        </div>
        <div className="step">
          <img src={Icon3} alt="" width="80px" />
          <span>Zdecyduj komu chcesz pomóc</span>
          <hr />
          <span>wybierz zaufane miejsce</span>
        </div>
        <div className="step">
          <img src={Icon4} alt="" width="80px" />
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
