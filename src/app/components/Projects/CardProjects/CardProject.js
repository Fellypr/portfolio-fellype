"use client";
import "./CardProject.css";
import { useState } from "react";
import InformationProject from "../../../data/InformationProject.json";
import DetailsProject from "../DetailsProjects/DetailsProject";

import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const iconsLibrary = {
  Fa: FaIcons,
  Si: SiIcons,
  Ai: AiIcons,
  Bi: BiIcons,
};

function GetIcons(iconName){
  const prefix = iconName.slice(0,2);
  const lib = iconsLibrary[prefix];
  return lib?.[iconName] || null;
}

export default function CardProject() {
  const [showDetails, setShowDetails] = useState(false);
  const [projectSelected, setProjectSelected] = useState(null);
  function selectProject(project) {
    setProjectSelected(project);
    setShowDetails(true);
    console.log(project);
  }
  return (
    <>
      {InformationProject.map((project) => (
        <>
          <button className="project-card" onClick={() => selectProject(project)}>
            <picture>
              <img src={project.image} alt={project.name} />
            </picture>
            <div>
              <h3 className="name-project">{project.name}</h3>
              <div className="description-projetc">
                <div className="icons">
                {project.icons?.map((iconName, index) => {
                  const Icon = GetIcons(iconName);
                  return Icon ? ( 
                    <Icon key={index} size={30} color="#f7f7f7ff" />
                  ) : null;
                })}
              </div>
              </div>
            </div>
          </button>
          {showDetails && <DetailsProject  projectSelected={projectSelected} />}
        </>
      ))}
    </>
  );
}
