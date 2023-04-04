import React from "react";
import Project from "../components/Project";
import projects from "../data/projects";
import "../styles/sectionThree/sectionThree.scss";

export default function SectionThree() {
  return (
    <section className="sectionThree">
      <div className="intro">
        <h2>My projects</h2>
        <p>
          Explore my recent projects, showcasing the skills and creativity I've
          honed throughout my front-end developer education.
        </p>
      </div>
      {projects.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </section>
  );
}
