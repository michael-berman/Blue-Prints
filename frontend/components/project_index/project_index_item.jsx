import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectIndexItem = (props) => {
  return (
    <li className="project-index-item">
      {props.project.title}
      <p>by {props.project.author.username}</p>
    </li>
  )
}

export default withRouter(ProjectIndexItem);
