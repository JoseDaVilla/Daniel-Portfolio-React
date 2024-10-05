import React from "react";
import { Introduction } from './Introduction.jsx';
import { Skills } from './Skills.jsx';
import { Projects } from './Projects.jsx';
import { AboutMe } from './AboutMe.jsx';
import "./App.css"

const App = () => {
  return (
    <section className="content">
      <Introduction />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <AboutMe />
    </section >
  );
};

export default App;
