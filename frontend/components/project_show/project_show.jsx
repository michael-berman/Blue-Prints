import React from 'react';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
    window.addEventListener('scroll', this.handleScroll);
    debugger
  }

  componentWillUnmount(){
    let navbar = document.querySelector(".project-show-navbar-fixed");
    navbar.classList.remove("project-show-navbar-fixed");
    window.removeEventListener('scroll', this.handleScroll);
    debugger
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

  renderBody(){
    if(this.props.project){
      return (
        <article className="project-show-body">
          {this.props.project.body}
        </article>
      )
    } else {
      return null;
    }
  }

  handleScroll(){
    let navbar = document.querySelector(".project-show-navbar");
    navbar.classList.add("project-show-navbar-fixed");
  }

  render(){
    return(
      <article className="project-show-wrapper" >
        <div className="project-show-container">
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </article>
    )
  }

}

export default ProjectShow;
