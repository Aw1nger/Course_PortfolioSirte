import React from "react";
import Header from "../../modules/Header/Header";
import MainBlock from "../../modules/Main/Main";
import Intro from "../../modules/Intro/Intro";
import AboutUs from "../../modules/AboutUs/AboutUs";
import Services from "../../modules/Services/Services";

const MainPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <MainBlock>
        <Intro />
        <AboutUs />
        <Services />
      </MainBlock>
    </div>
  );
};

export default MainPage;
