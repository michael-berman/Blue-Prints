import React from 'react';
import ProjectIndex from '../project_index/project_index';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProjects();
  }

  render(){
    return (
      <main>
        <button onClick={this.props.logout}>Logout</button>
        <ProjectIndex projects={this.props.projects} />
      </main>
    )
  }


}

export default HomePage;
