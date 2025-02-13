import React, { useState } from "react";
import "./entete.css";
const Entete = () => {
  /* ============toggle menu=========== */
  const [Toggle, showmenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav conatiner">
        <a href="index.html" className="nav_logo">
          Tasnim
        </a>
        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active_link">
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link">
                <i className="uil uil-user nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i>
                Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#qualifications" className="nav_link">
                <i className="uil uil-scenery nav_icon"></i>
                Qualifications
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => showmenu(!Toggle)}
          ></i>
        </div>
        <div className="nav_toggle" onClick={() => showmenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Entete;
