import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About Me</h2>
        <hr />
        <div className="about-content">
          <div className="column-1">
            <h3>
              I'm<span className="praimary-text"> Qutaiba AL-Sinjlawi,</span> a web developer
            </h3>
            <br />
            <p>
              I am a passionate, dedicated, and creative web developer with a proven track record of creating
              high-quality, user-friendly websites. My expertise lies in developing elegant, responsive designs, efficient
              back-end systems, and engaging user experiences. I am always eager to learn and adapt to new technologies
              and improve my skills.
            </p>
          </div>

          <div className="column-2">
            <p><b>Email:</b> qalsinjlawi@gmail.com</p>
            <p><b>Phone:</b> +962790547830</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
