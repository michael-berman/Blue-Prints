import React from 'react';

class SessionForm extends React.Component {
  constructor(props);
  if(this.props.formType === 'login'){
    this.state = { username: "", password: "" };
  } else {
    this.state = { email: "", username: "", password: "" };
  }

  render(){

    return (
      <div>

    
      </div>
    )
  }
}
