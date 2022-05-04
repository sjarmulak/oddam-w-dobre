import React from "react";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import "../scss/HomeFooter.scss";

export default function HomeFooter() {
  return (
    <footer>
      <div></div>
      <div>
        <p>Copyright by Coders Lab</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/" target="_blank">
          <img className="facebook" src={Facebook} alt="" width="30px" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img className="instagram" src={Instagram} alt="" width="30px" />
        </a>
      </div>
    </footer>
  );
}
