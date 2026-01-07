import "./DetailsProject.css";
import Image from "next/image";
export default function DetailsProject() {
  return (
    <main className="details-project-container">
      <section className="project-section">
        <div className="images-project">
          <Image
            src="/stacks-projects/Captura de tela de 2026-01-07 11-22-46.png"
            alt="Projeto1"
            width={450}
            height={225}
          />
        </div>
        <div className="description-project-container">
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
            <button>Ver Projeto</button>
            <button>Ver Projeto</button>
            <button>Ver Projeto</button>
          </div>
        </div>
      </section>
    </main>
  );
}
