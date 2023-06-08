import React from "react";
import { Element } from "react-scroll";
import TopContent from "../topContent/topContent";
import "./hero.css"
const Hero = () => {
  return (
    <Element name="about" className="heroContainer">
      <TopContent />
    </Element>
  );
};

export default Hero;
