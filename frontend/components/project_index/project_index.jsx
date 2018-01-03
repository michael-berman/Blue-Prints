import React from 'react';
import ProjectIndexItem from './project_index_item';

const ProjectIndex = (props) => {
  const projects = props.projects.map((project, idx) => {
    return (
      <ProjectIndexItem project={project} key={idx} />
    )
  });
  return(
    <ul>
      {projects}
    </ul>
  )
};

export default ProjectIndex;
