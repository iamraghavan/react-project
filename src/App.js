import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Hero from "./components/heroContainer/hero";
import Skill from "./components/skillContainer/skill";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Skill />
    </div>
  );
};

export default App;
