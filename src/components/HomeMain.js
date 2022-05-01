import React from "react";
import { Outlet, Link as NavLink } from "react-router-dom";
import "../scss/HomeMain.scss";
import Decoration from "../assets/Decoration.svg";

export default function HomeMain() {
  return (
    <section id="main">
      <div className="container">
        <div className="main-info">
          <h1>
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img src={Decoration} alt="" width="100px" height="50px" />
          <br />
          <div className="buttons">
            <NavLink to="/logowanie">
              <button>ODDAJ RZECZY</button>
            </NavLink>
            <NavLink to="/logowanie">
              <button>ZORGANIZUJ ZBIÓRKĘ</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
