import React from 'react';
import ProjectIndex from '../project_index/project_index';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.props.fetchProjects();
  }

  handleLogout(){
    this.props.logout();
  }

  renderHomepage(){
    return(
      <article className="homepage-image">
        <span className="homepage-header">
          <h1>Let's Build a Blue Print!</h1>
        </span>
      </article>
    )
  }

  render(){
    return (
      <main className="homepage-wrapper">
        {this.renderHomepage()}
        <div className="projects-wrapper">
          <ProjectIndex projects={this.props.projects} />
        </div>
      </main>
    )
  }

}

export default HomePage;
