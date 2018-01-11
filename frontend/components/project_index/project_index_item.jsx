import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const ProjectIndexItem = ({project, idx}) => {

  if (typeof project === 'string') {
    return null;
  } else {
    return (
      <li key={idx} className="project-index-item-container">
        <Link to={`/projects/${project.id}`}
          className="project-index-item-link" >
          <img src={project.image_url} />
        </Link>
        <div className="project-index-item-info">
          <Link to={`/projects/${project.id}`}
            className="project-index-item-title" >
            {project.title}</Link><br />
          <span className="project-index-item-author">
            <p>
              <strong className="project-index-item-by-author">by
              </strong>
              <Link to={`/users/${project.author.id}`}
                className="project-index-item-author-link">
                {project.author.username}
              </Link>
            </p>
          </span>
        </div>
      </li>
    )
  }
}

export default ProjectIndexItem;
