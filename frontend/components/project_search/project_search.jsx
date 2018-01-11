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
    if ( typeof this.state[0] !== "string" ){
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
          <Link to="/" >
            <img src='/images/search-error-logo.png' />
          </Link>
          <div className="no-search-found-info">
            <span>No Blue Prints Found!</span>
            <p>Take this opportunity to <Link to="/projects/new" >Submit One!</Link>
            </p>
          </div>
        </div>
      )
    }
  }

  renderSearchHeader(){
    let arr = Object.values(this.state);
    let queryString = arr[arr.length - 1];
    return (
      <div className="project-search-list-header">
        <h1>
          Search Results for <span> {queryString}</span>
        </h1>
      </div>
    )
  }

  render(){
    return(
      <div className="project-search-wrapper" >
        <div className="project-search-list-container">
          {this.renderSearchHeader()}
          {this.renderSteps()}
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectSearch);
