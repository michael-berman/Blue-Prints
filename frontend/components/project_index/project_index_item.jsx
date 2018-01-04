import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectIndexItem = ({project, idx}) => {
  return (
    <li key={idx} className="project-index-item-container">
      <a className="project-index-item-link" href="#"></a>
      <div className="project-index-item-info">
        <span className="project-index-item-title">
          {project.title}
        </span><br />
        <span className="project-index-item-author">
          <p>by {project.author.username}</p>
        </span>
      </div>
    </li>
  )
}

export default withRouter(ProjectIndexItem);
