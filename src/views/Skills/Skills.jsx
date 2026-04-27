import React from 'react';
import meter1 from "../../Assets/meter1.svg";
import meter2 from "../../Assets/meter2.svg";
import meter3 from "../../Assets/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';

 const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill" id="habilidades">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <h2>Habilidades</h2>
                          <p>Algunas de las herramientas que más utilizo en mis trabajos incluyen bases de datos SQL, el framework React, el lenguaje de programación JavaScript y el entorno de ejecución Node.js con el framework Express.</p>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <img src={meter1} alt="Image1" />
                                  <h5>SQL</h5>
                              </div>
                              <div className="item">
                                  <img src={meter2} alt="Image2" />
                                  <h5>React</h5>
                              </div>
                              <div className="item">
                                  <img src={meter3} alt="Image3" />
                                  <h5>JavaScript</h5>
                              </div>
                              <div className="item">
                                  <img src={meter1} alt="Image4" />
                                  <h5>Node - Express</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  export default Skills;