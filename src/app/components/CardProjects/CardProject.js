import "./CardProject.css";

import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker,FaJs,FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs,SiStyledcomponents,SiTailwindcss } from "react-icons/si";
export default function CardProject() {
  return (
    <>
      <div className="project-card">
        <picture>
          <img
            src="stacks-projects/Captura de tela de 2025-12-26 11-17-39.png"
            alt="Mova impex"
          />
        </picture>
        <div>
          <h3 className="name-project">Mova Impex</h3>
          <div className="description-projetc">
            <button>Ver Projeto</button>
            <SiNextdotjs size={30} color="#f7f7f7ff" />
          </div>
        </div>
      </div>
      <div className="project-card">
        <picture>
          <img
            src="stacks-projects/Captura de tela de 2025-12-26 11-17-39.png"
            alt="Mova impex"
          />
        </picture>
        <div>
          <h3 className="name-project">Mova Impex</h3>
          <div className="description-projetc">
            <button>Ver Projeto</button>
            <div className="stacks-use">
              <SiNextdotjs size={30} color="#f7f7f7ff" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <picture>
          <img
            src="stacks-projects/Captura de tela de 2025-12-26 11-17-39.png"
            alt="Mova impex"
          />
        </picture>
        <div>
          <h3 className="name-project">Mova Impex</h3>
          <div className="description-projetc">
            <button>Ver Projeto</button>
            <SiNextdotjs size={30} color="#f7f7f7ff" />
          </div>
        </div>
      </div>
      <div className="project-card">
        <picture>
          <img
            src="stacks-projects/Captura de tela de 2025-12-26 11-17-39.png"
            alt="Mova impex"
          />
        </picture>
        <div>
          <h3 className="name-project">Mova Impex</h3>
          <div className="description-projetc">
            <button>Ver Projeto</button>
            <SiNextdotjs size={30} color="#f7f7f7ff" />
          </div>
        </div>
      </div>
    </>
  );
}
