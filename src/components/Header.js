import React from "react";

function Header() {
  const toggleMode = () => {
    const body = document.body;
    const btn = document.querySelector(".btn-mode");

    body.classList.toggle("white_mode");

    if (body.classList.contains("white_mode")) {
      btn.classList.remove("fa-moon");
      btn.classList.add("fa-sun");
    } else {
      btn.classList.remove("fa-sun");
      btn.classList.add("fa-moon");
    }
  };

  return (
    <header>
      <nav>
        <a href="#" className="logo">
          <span className="q">Q</span>
          <span className="al">alsinjlawi</span>
        </a>
        <ul className="nav_links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#highlight">Highlight</a></li>
        </ul>
        <span>
          <i className="fa-solid fa-sun btn-mode" onClick={toggleMode}></i>
        </span>
      </nav>
    </header>
  );
}

export default Header;
