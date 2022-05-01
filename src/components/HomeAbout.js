import React from "react";
import "../scss/HomeAbout.scss";

export default function HomeAbout() {
  return (
    <section id="about">
      <div className="about-info">
        <h1>O nas</h1>
        <img src="../assets/Decoration.svg" alt="" width="50px" height="50px" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          ad ab excepturi porro repudiandae, voluptates.
        </p>
        <img src="../assets/Signature.svg" alt="" width="50px" height="50px" />
      </div>
      <div className="about-photo"></div>
    </section>
  );
}
