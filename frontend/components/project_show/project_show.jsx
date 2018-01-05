import React from 'react';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  componentWillUnmount(){
    let navbar = document.querySelector(".project-show-navbar-fixed");
    if (navbar){
      navbar.classList.remove("project-show-navbar-fixed");
    }
    window.removeEventListener('scroll', this.handleScroll);
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
          <div className="blue-print-content">
            {this.props.project.body}
          </div>
          <div className="blue-print-sidebar">

          </div>
        </article>
      )
    } else {
      return null;
    }
  }

  handleScroll(){
    let navbar = document.querySelector(".project-show-navbar");
    if (window.scrollY > 150 && navbar){
      navbar.classList.add("project-show-navbar-fixed");
    } else if (window.scrollY < 150 && navbar){
      navbar.classList.remove("project-show-navbar-fixed");
    } else {
      return null;
    }
  }

  render(){
    return(
      <article className="project-show-wrapper" onScroll={this.handleScroll}>
        <div className="project-show-container">
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </article>
    )
  }

}

export default ProjectShow;
