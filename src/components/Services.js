import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2 className="taitle">Services</h2>
        <div className="icon">
          <div className="card">
            <div className="info">
              <i className="fa-solid fa-code"></i>
              <h3>Web Development</h3>
              <p>
                Creating a website is a complex task, but our team is here to help you
                create a stunning and functional website that will help you reach your
                audience and grow your business.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <h3>Responsive Design</h3>
              <p>
                Creating a responsive design is a crucial aspect of web development,
                as it ensures that your website looks and functions optimally on
                different devices and screen sizes.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="info">
              <i className="fa-solid fa-object-ungroup"></i>
              <h3>Creative Design</h3>
              <p>
                We help you brainstorm and develop your ideas for your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
