import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormShow from './comment_form_show';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount() {
    window.scrollTo(0,0);
  }

  componentWillUnmount(){
    let navbar = document.querySelector(".project-show-navbar-fixed");
    if (navbar) {
      navbar.classList.remove("project-show-navbar-fixed");
    }
    window.removeEventListener('scroll', this.handleScroll);
  }

  renderHeader() {
    if (this.props.project) {
      let project = this.props.project;
      return (
        <nav className="project-show-navbar">
          <h1>
            <span className="project-show-navbar-header">
              {project.title}
            </span>
              by
            <Link to={`/users/${project.author.id}`}
              className="project-show-navbar-author">
              {project.author.username}
            </Link>
          </h1>
        </nav>
      );
    } else {
      return null;
    }
  }

  renderImages(photos) {
    const renderedPhotos = photos.map( (photo,idx) => {
      return (
        <li key={idx}>
          <img className="project-show-step-image"
           src={photo.image_url} />
       </li>
      )
    })
    return (
      <ul className="project-show-step-image-list">
        {renderedPhotos}
      </ul>
    )
  }

  renderSteps() {
    const allSteps = this.props.project.steps;
    if (allSteps) {
      const renderedSteps = allSteps.map( (step, idx) => {
        return (
          <li key={idx}
            className="project-show-step-container">
            <h1 className="project-show-step-title">
              {`Step ${idx + 1}: ${step.title}`}
            </h1>
            <div className="project-show-images-container">
              {this.renderImages(step.photos)}
            </div>
            <div className="project-show-step-body">
              {step.body}
            </div>
          </li>
        )
      })
      return (
        <div className="project-show-steps-wrapper">
          {renderedSteps}
          <h1 className="project-show-step-title">
            Finished Blue Print:
          </h1>
          <div className="project-show-images-container">
            <img className="project-show-step-image"
             src={this.props.project.image_url} />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  renderBody() {
    if (this.props.project) {
      return (
        <article className="project-show-body">
          <div className="blue-print-content">
            {this.renderSteps()}
            {this.renderCommentFormShow()}
          </div>
          <div className="blue-print-sidebar">
          </div>
        </article>
      )
    } else {
      return null;
    }
  }

  handleScroll() {
    let navbar = document.querySelector(".project-show-navbar");
    if (window.scrollY > 150 && navbar){
      navbar.classList.add("project-show-navbar-fixed");
    } else if (window.scrollY < 150 && navbar){
      navbar.classList.remove("project-show-navbar-fixed");
    } else {
      return null;
    }
  }

  renderCommentFormShow(){
    if (this.props.project) {
      return (
        <div>
          <CommentFormShow createComment={this.props.createComment}
            projectId={this.props.project.id}
            comments={this.props.project.comments}
            history={this.props.history}
            currentUser={this.props.currentUser}/>
        </div>
      )
    } else {
      return null;
    }
  }

  render() {
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
