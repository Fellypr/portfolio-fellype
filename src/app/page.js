import "./home.css";
import "./globals.css";
import NavBar from "./components/Navbar/NavBar";
import CardProject from "./components/Projects/CardProjects/CardProject";
import CardFormacao from "./components/CardFormacao/CardFormacao";
import CardContatos from "./components/CardContatos/ContactCards";


//icons
import { AiOutlineDotNet } from "react-icons/ai";
import { FaDocker,FaJs,FaReact } from "react-icons/fa";
import { BiLogoTypescript,BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs,SiStyledcomponents,SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div id="introdution">
        <h3 className="apresentation">Olá, Meu Nome é Fellype Kenned</h3>
        <span className="dev">Desenvolvedor FullStack</span>
      </div>
      <div id="about-me">
        <h3 className="title">Sobre mim <hr className="line"/></h3>
        <div className="container">
          <div className="stacks">
            <div className="cards-stack">
              <AiOutlineDotNet size={70} color="#512bd4" />
              <h4>DotNet</h4>
            </div>
            <div className="cards-stack">
              <FaDocker size={70} color="#0db7ed" />
              <h4>Docker</h4>
            </div>
            <div className="cards-stack">
              <SiNextdotjs size={70} color="#000000" />
              <h4>Next.js</h4>
            </div>
            <div className="cards-stack">
              <SiStyledcomponents size={70} color="#db7093" />
              <h4>Styled Components</h4>
            </div>
            <div className="cards-stack">
              <FaJs size={70} color="#f7df1e" />
              <h4>JavaScript</h4>
            </div>
            <div className="cards-stack">
              <BiLogoPostgresql size={70} color="#336791" />
              <h4>PostgreSQL</h4>
            </div>
            <div className="cards-stack">
              <FaReact size={70} color="#61dbfb" />
              <h4>React</h4>
            </div>
            <div className="cards-stack">
              <BiLogoTypescript size={70} color="#007acc" />
              <h4>TypeScript</h4>
            </div>
            <div className="cards-stack">
              <SiTailwindcss size={70} color="#38bdf8" />
              <h4>Tailwind CSS</h4>
            </div>
          </div>
          
          <p className="text">
            lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit amet luctus venenatis lectus magna fringilla urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo vel fringilla est ullamcorper eget nulla facilisi etiam
            <br /><br />
            dignissim diam quis enim lobortislorem ipsum dolor sit amet
            consectetur adipiscing elit ut aliquam purus sit amet luctus
            venenatis lectus magna fringilla urna porttitor rhoncus dolor purus
            non enim praesent elementum facilisis leo vel fringilla est
            <br /><br />
            ullamcorper eget nulla facilisi etiam dignissim diam quis enim
            lobortislorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam purus sit amet luctus venenatis lectus magna fringilla urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis
          </p>
        </div>
      </div>

      <div id="projects">
        <h3 className="title">Projetos <hr className="line"/></h3>
        <div className="projects-container">
          <CardProject />
        </div>
      </div>

      <div id="formacao-academica">
        <h3 className="title">Academica<hr className="line"/></h3>
        <div className="formation-container">
          <CardFormacao />
        </div>
      </div>

      <div id="contatos">
        <h3 className="title">Contatos <hr className="line"/></h3>
          <CardContatos />
      </div>
    </main>
  );
}
