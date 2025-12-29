import "./CardProject.css";
import InformationProject from "../../data/InformationProject.json";

import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiStyledcomponents, SiTailwindcss } from "react-icons/si";
export default function CardProject() {
  return (
    <>
      {InformationProject.map((project) => (
        <>
          <div className="project-card">
            <picture>
              <img src={project.image} alt={project.name} />
            </picture>
            <div>
              <h3 className="name-project">{project.name}</h3>
              <div className="description-projetc">
                <button>Ver Projeto</button>
                <SiNextdotjs size={30} color="#f7f7f7ff" />
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
