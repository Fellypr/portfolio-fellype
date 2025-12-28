import "./ContactCards.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
export default function ContactCards() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <span className="icon"><BiLogoGmail size={30} color="red" /></span>
        <p>fellype29kennedemil@gmail.com</p>
      </div>

      <div className="contact-card">
        <span className="icon"><FaWhatsapp size={30} color="green" /></span>
        <p>+55 82 99316-6012</p>
      </div>

      <div className="contact-card">
        <span className="icon"><FaGithub size={30} color="black" /></span>
        <p>github.com/Fellypr</p>
      </div>

      <div className="contact-card">
        <span className="icon"><FaLinkedin size={30} color="#0077b5" /></span>
        <p>linkedin.com/in/fellype-kenned</p>
      </div>
    </div>
  );
}
