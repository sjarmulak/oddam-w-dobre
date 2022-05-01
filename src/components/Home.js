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
import { Link, animateScroll as scroll } from "react-scroll";

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
