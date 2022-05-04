import React from "react";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";
import HomeFooter from "./HomeFooter";
import HomeFourSteps from "./HomeFourSteps";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeOrganizations from "./HomeOrganizations";
import HomeThreeColumns from "./HomeThreeColumns";
import "../scss/Home.scss";
import Decoration from "../assets/Decoration.svg";

export default function Home() {
  return (
    <>
      <HomeMain></HomeMain>
      <HomeThreeColumns></HomeThreeColumns>
      <HomeFourSteps></HomeFourSteps>
      <HomeAbout></HomeAbout>
      <HomeOrganizations></HomeOrganizations>
      <HomeContact></HomeContact>
      <HomeFooter></HomeFooter>
    </>
  );
}
