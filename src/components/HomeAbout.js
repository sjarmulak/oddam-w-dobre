import React from "react";
import "../scss/HomeAbout.scss";
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";

export default function HomeAbout() {
  return (
    <section id="about">
      <div className="about-info">
        <h1>O nas</h1>
        <img
          className="decoration"
          src={Decoration}
          alt=""
          width="250px"
        />{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ad ab excepturi porro repudiandae, voluptates.
        </p>
        <img src={Signature} alt="" width="200px" />{" "}
      </div>
      <div className="about-photo"></div>
    </section>
  );
}
