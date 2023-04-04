import React from "react";

const Project = ({
  image,
  title,
  shortDescription,
  repoLink,
  liveSiteLink,
  index,
}) => {
  const isImageRight = index % 2 === 0;

  return (
    <div className="project">
      {isImageRight ? (
        <>
          <div className="info">
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <div className="links">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
              <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            </div>
          </div>
          <div className="image">
            <img src={image} alt={title} />
          </div>
        </>
      ) : (
        <>
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="info">
            <h3>{title}</h3>
            <p>{shortDescription}</p>
            <div className="links">
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
              <a href={liveSiteLink} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
