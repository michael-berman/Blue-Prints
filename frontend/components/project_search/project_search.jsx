import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from '../project_index/project_index_item';

class ProjectSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.values(this.props.projects);
    this.renderSteps = this.renderSteps.bind(this);
    this.renderSearchHeader = this.renderSearchHeader.bind(this);
  }

  renderSteps(){
    if (this.state.length > 0){
      const projects = this.state.map((project, idx) => {
        return (
          <ProjectIndexItem project={project} key={idx} />
        )
      })
      return (
        <ul className="project-index-list">
          {projects}
        </ul>
      )
    } else {
      return (
        <div className="no-search-found">
          No Blue Prints Found!
        </div>
      )
    }
  }

  renderSearchHeader(){

  }

  render(){
    return(
      <div className="project-search-wrapper" >
        <div className="project-search-list-header">
          {this.renderSearchHeader()}
        </div>
        <div className="project-search-list-container">
          {this.renderSteps()}
        </div>
      </div>
    )
  }
}

export default ProjectSearch;
