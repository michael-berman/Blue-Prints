import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
          <ProjectIndexItem project={project} idx={idx} />
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

  handleSearch(){

  }

  renderSearchHeader(){
    return (
      <div className="project-search-list-header">
        Let's make
        <form onClick={this.handleSearch}>

        </form>
      </div>
    )
  }

  render(){
    return(
      <div className="project-search-wrapper" >
        <div className="project-search-list-container">
          {this.renderSteps()}
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectSearch);
