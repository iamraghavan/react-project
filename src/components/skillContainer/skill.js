import React from "react";
import { Element } from "react-scroll";
import LinearProgress from "@mui/material/LinearProgress";

const Skill = () => {
  return (
    <Element className="skillContainer" id="skills">
      <div className="skillContainer__image">
        <img src="https://wallpapercave.com/wp/wp7039155.png" alt="" />
      </div>
      <div className="skillContainer__text">
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>React</h5>
          <div className="skillContainer__slider skillContainer__slidColor1">
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Node JS</h5>
          <div className="skillContainer__slider skillContainer__slidColor2">
            <LinearProgress variant="determinate" value={40}/>
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Bootstrap</h5>
          <div className="skillContainer__slider skillContainer__slidColor3">
            <LinearProgress variant="determinate" value={60}/>
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Figma</h5>
          <div className="skillContainer__slider skillContainer__slidColor4  ">
            <LinearProgress variant="determinate" value={50}/>
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Photoshop</h5>
          <div className="skillContainer__slider skillContainer__slidColor1">
            <LinearProgress variant="determinate" value={90}/>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skill;
