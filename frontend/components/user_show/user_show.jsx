import React from 'react';

class UserShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  renderHeader(){
    return (
      <div className="user-show-header">

      </div>
    )
  }

  renderProjects(){

    if (this.props.user){

    } else {
      return null;
    }
  }



  render(){
    return (
      <article className="user-show-wrapper" >
        <div className="user-show-container">
          {this.renderHeader()}
          {this.renderProjects()}
        </div>
      </article>
    )
  }
}

export default UserShow;
