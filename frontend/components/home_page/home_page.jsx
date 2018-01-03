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
        <ProjectIndex props={props} />
      </main>
    )
  }


}

export default HomePage;
