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

  render(){
    return (
      <main className="homepage-wrapper">
        <Link to='/signup'>Signup</Link><br />
        <Link to='/login'>Login</Link><br />
        <button onClick={this.handleLogout}>Logout</button>
      </main>
    )
  }

}
// <ProjectIndex projects={this.props.projects} />

export default HomePage;
