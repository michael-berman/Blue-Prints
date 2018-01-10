import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  renderHeader(){
    if (this.props.user) {
      const user = this.props.user;
      const date = this.props.user.created_at.slice(0, 10);
      return (
        <div className="user-show-header">
          <span className="user-show-author">
            {this.props.user.username}
          </span>
          <span className="user-show-info">
            <p>{user.projects_amount} <span>Blue Prints</span></p>
            <p>{user.comments_amount} <span>Comments</span></p>
            <p><span>Joined {date}</span></p>
          </span>
        </div>
      )
    }
  }

  renderProjects(){
    if (this.props.user){
      let user_projects = Object.values(this.props.user.projects);
      const projects = user_projects.map( (project, idx) => {
        return (
          <li key={idx} className="user-show-project-list-item">
            <Link to={`/projects/${project.id}`}
              className="user-show-item-link" >
              <img src={project.image_url} />
            </Link>
            <div className="user-show-item-info">
              <Link to={`/projects/${project.id}`}
                className="user-show-item-title" >
                {project.title}</Link>
            </div>
          </li>
        )
      })
      return (
        <ul className="user-show-project-list">
          <span>{`${this.props.user.username}'s Blue Prints`}</span><br />
          <div className="user-show-project-list-wrap" >
            {projects}
          </div>
        </ul>
      )

    } else {
      return null;
    }
  }



  render(){
    return (
      <article className="user-show-wrapper" >
        <div className="user-show-container">
          {this.renderHeader()}
          <div className="user-show-project-container" >
            {this.renderProjects()}
          </div>
        </div>
      </article>
    )
  }
}

export default UserShow;
