import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const ProjectArray = projects.map((website) => {
    return <ProjectItem key={website.id} name={website.name} about={website.about} technologies={website.technologies} />
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ProjectArray}</div>
    </div>
  );
}

export default ProjectList;
