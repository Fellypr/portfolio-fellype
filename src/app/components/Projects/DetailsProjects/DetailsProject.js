"use client";
import "./DetailsProject.css";
import { useEffect, useState } from "react";
import Image from "next/image";
export default function DetailsProject({projectSelected,setShowDetails}) {
  const [imageIndex, setImageIndex] = useState(projectSelected.conteudo[0]);

  useEffect(() => {
    const outDetails = (event) =>{
      if(event.key === "Escape"){
        setShowDetails(false);
      }
    }
    window.addEventListener("keydown", outDetails);
    return () => {
      window.removeEventListener("keydown", outDetails);
    };
  }, []);
  return (
    <main className="details-project-container">
      <section className="project-section">
        <div className="images-project">
          <Image
            src={imageIndex}
            alt="Projeto1"
            width={450}
            height={225}
            priority
            className="image-main"
          />
          <div className="image-last">
            {projectSelected.conteudo.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Projeto1"
                width={100}
                height={50}
                onMouseEnter={() => setImageIndex(image)}
                onClick={() => setImageIndex(image)}
                className="image-mini"
              />
            ))}
          </div>
        </div>
        <div className="description-project-container">
          <div className="close-button" onClick={() => setShowDetails(false)}>x</div>
          <h1 className="title-project">{projectSelected.name}</h1>
          <p className="description-project">
            {projectSelected.description}
          </p>

          <ul className="list-tools">
            <p className="title-tools">Principais Funcionalidades:</p>
            {projectSelected?.funcionalidades.map((items, index) => (
              <li key={index}>{items}</li>
            ))}
          </ul>
          <ul className="list-tools">
            <p className="title-tools">Ferramentas Utilizadas:</p>
            {projectSelected?.ferramentas.map((items, index) => (
              <li key={index}>{items}</li>
            ))}
          </ul>
          <div className="buttons">
            <a className="link-visit-web" href={projectSelected.website} target="_blank" rel="noreferrer">Visitar o Site</a>
            <a className="link-visit-web" href={projectSelected.repository} target="_blank" rel="noreferrer">Ver Repositorio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
