import projImg2 from "../../Assets/crediplus.png";
import projImg3 from "../../Assets/nutripoint.png";
import projImg1 from "../../Assets/portfolio.png";
import React from 'react';
import './Projects.css'
import Project from './Project';

export const Projects = () => {
  const projects = [
    {
      title: 'Proyecto de Prueba',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg1,
      link: 'https://portafolio-kappa-indol.vercel.app/',
    },
    {
      title: 'Proyecto Propio',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg2,
      link: 'https://crediplus.site/home',
    },
    {
      title: 'Proyecto Propio',
      description: 'Desarrollo & Diseño',
      imgUrl: projImg3,
      link: 'https://nutripoint.site/',
    },
  ];

  return (
    <section className="container-projects" id="proyectos">
      <h2>Proyectos</h2>
      <br />
      <h5>En esta sección, encontrarás una selección de proyectos en los que he trabajado. Cada proyecto representa una combinación de diseño y desarrollo, y he puesto mi pasión y habilidades en ellos. Explora los diferentes proyectos en las pestañas a continuación y descubre más sobre mi trabajo. </h5>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

