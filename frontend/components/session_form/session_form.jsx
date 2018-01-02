import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.formType === 'login'){
      this.state = { username: "", password: "" };
    } else {
      this.state = { email: "", username: "", password: "" };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderSignup = this.renderSignup.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  navLink(){
    if (this.props.formType === 'login') {
      return <Link to='/signup'>Sign Up</Link>
    } else {
      return <Link to='/login'>Login</Link>
    }
  }

  handleSubmit(e){
    e.preventDefault();

  }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value })
    }
  }

  renderSignup(){
    if (this.props.formType === 'login'){
      return (
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <input type="text" value={this.state.username} onChange={this.update('username')} />
          <input type="text" value={this.state.password} onChange={this.update('password')} />
          <button type="submit" value={this.props.formType}/>
        </form>
      )
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <input type="text" value={this.state.email} onChange={this.update('email')} />
          <input type="text" value={this.state.username} onChange={this.update('username')} />
          <input type="text" value={this.state.password} onChange={this.update('password')} />
          <button type="submit" value={this.props.formType}/>
        </form>
      )
    }
  }

  renderErrors(){
    return(
      <ul className="session-error-container">
        {this.props.errors.map((error), i => (
          <li key={`error-${i}`} className="session-error-item">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        {this.renderErrors()}
        {this.renderSignup()}
        {this.navLink()}
      </div>
    )
  }
}
