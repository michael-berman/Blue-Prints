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
          <h1>{this.props.project.title}</h1>
          <p> by {this.props.project.author.username}</p>
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
