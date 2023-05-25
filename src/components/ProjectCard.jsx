import React from "react";

export default function ProjectCard({
  image,
  title,
  shortDescription,
  repoLink,
  liveSiteLink,
}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{shortDescription}</p>
        <div className="project-card-links">
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            Repository
          </a>
          <a
            href={liveSiteLink}
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
