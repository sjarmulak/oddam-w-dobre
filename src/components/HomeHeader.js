import React from "react";
import { Outlet, Link as NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "../scss/HomeHeader.scss";

export default function HomeHeader() {
  return (
    <header className="container">
      <div id="start">
        <div className="login">
          <ul>
            <li>
              <NavLink to="/logowanie">Zaloguj</NavLink>
            </li>
            <li id="zaloz-konto">
              <NavLink to="/rejestracja">Załóż konto</NavLink>
            </li>
          </ul>
        </div>
        <nav>
          <ul>
            <li id="start-nav">
              <NavLink to="/">Start</NavLink>
            </li>
            <li>
              <Link
                activeClass="active"
                to="three-columns"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                O co chodzi?
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="organizations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Fundacja i organizacje
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
