"use client";
import "./DetailsProject.css";
import { useState } from "react";
import Image from "next/image";
export default function DetailsProject({projectSelected}) {
  const [imageIndex, setImageIndex] = useState(projectSelected.conteudo[0]);
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
          <div className="close-button">X</div>
          <h1 className="title-project">Titulo do Projeto</h1>
          <p className="description-project">
            Daily Weather é uma aplicação web que exibe a condição climática de
            todas as cidades, bairros, estados ou países do mundo. Obtendo tanto
            os dados da temperatura atual, quanto os dos próximos 7 dias, além
            da velocidade do vento, nível de umidade, data/hora e temperatura
            máxima e mínima. Esse projeto foi desenvolvido com as seguintes
            ferramentas:
          </p>
          <ul className="list-tools">
            <li>React</li>
            <li>Next.js</li>
            <li>Styled Components</li>
          </ul>
          <div className="buttons">
            <button>Visitar o Site</button>
            <button>Ver Repositorio</button>
          </div>
        </div>
      </section>
    </main>
  );
}
