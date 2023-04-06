import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import projects from "../data/projects";

console.log(projects);

function ProjectCarousel() {
  return (
    <Carousel
      emulateTouch={true}
      infiniteLoop={true}
      showStatus={false}
      verticalSwipe="standard"
      autoFocus={false}
    >
      {projects.map((project, index) => {
        return (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <div className="info">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <div className="links">
                <a href={project.repoLink}>Repository</a>
                <a href={project.liveSiteLink}>Live site</a>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;
