import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProjects();
  }

  render(){
    const projects = this.props.projects.map((project, idx) => {
      return (
        <ProjectIndexItem project={project} key={idx} />
      )
    });
    return (
      <ul>
        {projects}
      </ul>
    )
  }
}

export default ProjectIndex;
