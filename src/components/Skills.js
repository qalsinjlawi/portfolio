import React from "react";

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>
          <i className="fa-solid fa-laptop-code"> Skills &amp;<span className="praimary-text"> Abilities</span></i>
        </h2>
        <hr />
        <div className="skills-content">
          <div className="row">
            <div className="item">
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div className="item">
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="item">
              <i className="fa-brands fa-square-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="item">
              <i className="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
