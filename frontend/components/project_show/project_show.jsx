import React from 'react';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
  }

  renderHeader(){
    if(this.props.project){
      return (
        <nav className="project-show-navbar">
          <h1>
            <span className="project-show-navbar-header">
              {this.props.project.title}
            </span>
              by
            <span className="project-show-navbar-author" >
              {this.props.project.author.username}
            </span>
          </h1>
        </nav>
      );
    } else {
      return null;
    }
  }

  render(){
    return(
      <article className="project-show-wrapper">
        <div className="project-show-container">
          {this.renderHeader()}
        </div>
      </article>
    )
  }

}

export default ProjectShow;
