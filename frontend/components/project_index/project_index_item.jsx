import React from 'react';
import { withRouter } from 'react-router-dom';

const ProjectIndexItem = (props) => {
  return (
    <li>
      {props.project.title}
    </li>
  )
}

export default withRouter(ProjectIndexItem);
