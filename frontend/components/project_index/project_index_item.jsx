import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ProjectIndexItem = ({project, idx}) => {
  debugger
  return (
    <li key={idx} className="project-index-item-container">
      <Link to={`/projects/${project.id}`}
        className="project-index-item-link" ></Link>
      <div className="project-index-item-info">
          <Link to={`/projects/${project.id}`}
            className="project-index-item-title" >
            {project.title}</Link><br />
        <span className="project-index-item-author">
          <p>by {project.author.username}</p>
        </span>
      </div>
    </li>
  )
}

export default ProjectIndexItem;
