"use client";
import "./NavBar.css";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  function handleResize() {
    if (window.innerWidth <= 850) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menu]);

  return (
    <>
      <div className="navbar-container">
        <RxHamburgerMenu
          className={menu ? "active" : "off"}
          onClick={toggleMenu}
          size={30}
        />
        <h3>FK</h3>
        <ul>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Formação Acadêmica</li>
          <li>Contato</li>
        </ul>
        <div className="social">
          <a href="https://github.com/FlavioK">
            <img
              src="icons/Linkedim/android-chrome-192x192.png"
              style={{ width: "40px" }}
            />
          </a>
          <a href="https://github.com/FlavioK">
            <img
              src="icons/gitHUb/android-chrome-192x192.png"
              style={{
                width: "40px",
                background: "white",
                borderRadius: "50%",
              }}
            />
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="menu">
          <ul>
            <li onClick={toggleMenu}>Sobre mim</li>
            <li onClick={toggleMenu}>Projetos</li>
            <li onClick={toggleMenu}>Formação Acadêmica</li>
            <li onClick={toggleMenu}>Contato</li>
          </ul>
        </div>
      )}
    </>
  );
}
