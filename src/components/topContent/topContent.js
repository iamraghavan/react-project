import React from "react";
import { Link } from "react-scroll";
import "./topContent.css";


function TopContent() {
  return (
    <div className="topContent">
      <div className="topContnet__container">
        <h1 className="">Pradeep Ragahvan</h1>
        <p>
          Entrupurner | Frontend Developer | Business Statagist
        </p>
        <a>
          <button className="topContent__downloadBtn">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workBtn">My Work</button>
        </Link>
      </div>
    </div>
  );
}

export default TopContent;
