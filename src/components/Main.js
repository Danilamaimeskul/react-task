import React from "react";
import AtticProjects from "./AtticProjects";
import "../styles/Main.css";
import { useState, useEffect } from "react";
import projects from "../data/projects";
import DescriptionBlock from "./main/DescriptionBlock";
import ProjectsBlock from "./main/ProjectBlock";
import Prefooter from "./main/Prefooter";

function Main(props) {
  return (
    <main>
      <DescriptionBlock />
      <ProjectsBlock />
      <AtticProjects />
      <Prefooter />
    </main>
  );
}

export default Main;
