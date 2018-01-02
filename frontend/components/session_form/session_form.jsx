import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    if(this.props.formType === 'login'){
      this.state = { username: "", password: "" };
    } else {
      this.state = { email: "", username: "", password: "" };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderEmail = this.renderEmail.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.navLink = this.navLink.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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
    const user = this.state;
    this.props.submitForm(user);

  }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value })
    }
  }

  renderEmail(){
    if (this.props.formType === 'signup'){
      return (
        <input type="text" value={this.state.email} onChange={this.update('email')} />
      )
    } else {
      return null;
    }
  }

  renderErrors(){
    if (this.props.errors.length > 0) {
      const errors = this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="session-error-item">
            {error}
          </li>
        ))
      return(
        <ul className="session-error-container">
          {errors}
        </ul>
      );
    }
  }

  render(){
    return (
      <div className="login-form-wrapper">
        <div className="auth-container-body" >
          <h1 className="login-form-header" >{this.props.formType}</h1>
          <div className="login-form-container">
            {this.renderErrors()}
            <form onSubmit={this.handleSubmit} className="login-form-box">
              {this.renderEmail()}
              <input type="text" value={this.state.username} onChange={this.update('username')} />
              <input type="password" value={this.state.password} onChange={this.update('password')} />
              <input type="submit" className="session-form-submit-button" value={this.props.formType} />
            </form>
          </div>
        </div>
        <div className="welcome-form-container">
          <p>Welcome to Blue Prints</p><br />
          <p>Enjoy all the wonderful blue prints that are available by
          the community!</p>
        </div>
        {this.navLink()}
      </div>
    )
  }
}

export default withRouter(SessionForm);
