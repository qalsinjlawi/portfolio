import React from "react";

function Hero() {
  return (
    <div className="content">
      <div className="div-text">
        <h4>Hello, I'm</h4>
        <h1>Qutaiba AL-Sinjlawi</h1>
        <span className="element-text">Full-Stack Web Developer</span>
        <br />
        <a
          href="https://drive.google.com/file/d/19FzqTS1lSMusWldjVDE4MDRjHWaNbUDK/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Download CV
        </a>
      </div>

      <div className="div-img">
      <img src="/images/my_photo.png" alt="My personal" />
      </div>

      <div className="social_icons">
        <a href="https://github.com/qalsinjlawi" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/qutaiba-al-sinjlawi-473130204/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:qalsinjlawi@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-square-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
