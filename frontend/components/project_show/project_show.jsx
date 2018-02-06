import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormShow from './comment_form_show';
import ReactHtmlParser from 'react-html-parser';

class ProjectShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false }
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
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
    const allSteps = this.props.steps;
    if (allSteps) {
      const renderedSteps = Object.values(allSteps).map( (step, idx) => {
        let stepBody = (step.body[0] === '<') ?
          ReactHtmlParser(step.body) : step.body;
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
              <pre>{stepBody}</pre>
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

  renderSidebar(){
    if (this.props.project) {
      let date = this.props.project.created_at.slice(0, 10);
      return (
        <div className="project-show-sidebar-container">
          <div className="project-show-sidebar-header">
            About this Blue Print
          </div>
            <div className="project-show-sidebar-info" >
              <div className="project-show-sidebar-first">
                <img src={this.props.project.profile_pic} />
                <div className="project-show-sidebar-writing">
                  <p><span>Posted:</span> <i>{date}</i></ p><br />
                  <p><span>Created by:</span>
                    <i>{` ${this.props.project.author.username}`}</i></p>
                </div>
              </div>
              <div className="project-show-favorite-btn">
                <i className="fa fa-heart fa-2x favorite-heart" onClick={this.toggleFollow}></i>
                0
              </div>
            </div>
        </div>
      )
    }
  }

  toggleFollow(){
    let favoriteButton = document.querySelector(".favorite-heart");
    if (this.state.toggled){
      favoriteButton.setAttribute("style", "color: lightgrey");
      this.setState({toggled: false });
      this.props.createFavorite(this.props.project.id);
    } else {
      favoriteButton.setAttribute("style", "color: red");
      this.setState({toggled: true });
      this.props.deleteFavorite(this.props.project.id);
    }
    // TODO: dispatch favorite actions
  }

  renderBody() {
    if (this.props.project) {
      return (
        <article className="project-show-body">
          <div className="blue-print-content">
            {this.renderSteps()}
            {this.renderCommentFormShow()}
          </div>
          <div className="project-show-sidebar-wrapper">
            {this.renderSidebar()}
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
            comments={this.props.comments}
            history={this.props.history}
            currentUser={this.props.currentUser}
            fetchComments={this.props.fetchComments}/>
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
