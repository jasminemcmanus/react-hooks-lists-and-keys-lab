import React from "react";

function ProjectItem({ name, about, technologies }) {

  const TechnologiesArray = technologies.map((platform) => {
    return <span key={platform}>{platform}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {TechnologiesArray}
      </div>
    </div>
  );
}

export default ProjectItem;
