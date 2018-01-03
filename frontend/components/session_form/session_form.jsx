import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

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
    this.demoLogin = this.demoLogin.bind(this);
    this.renderDemo = this.renderDemo.bind(this);
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
    this.props.submitForm(user).then(() => this.props.history.push('/'));
  }

  demoLogin(){
    const user = {username: "hunter12", password: "hunter12"}
    this.props.submitForm(user).then(() => this.props.history.push('/'));
  }

  renderDemo(){
    if (this.props.formType === 'login'){
      return (
        <input type="submit" className="session-form-submit-button"
          onClick={this.demoLogin} value="demo login"/>
      )
    } else {
      return null;
    }
  }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value })
    }
  }

  renderEmail(){
    if (this.props.formType === 'signup'){
      return (
        <input type="text" value={this.state.email}
          onChange={this.update('email')}
          placeholder="Email" className="session-form-input"/>
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
      <div className="session-wrapper">

        <div className="session-header-container">
          <h1 className="session-header" ><strong>{this.props.formType}</strong></h1>
        </div>

        <div className="session-page">
          <div className="session-row">
            <div className="session-form-container">
              <div className="session-form-body">

                {this.renderErrors()}

                <form className="login-form-box">
                  {this.renderEmail()}
                  <input type="text" value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username" className="session-form-input"/>
                  <input type="password" value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password" className="session-form-input"/>
                  <input type="submit" className="session-form-submit-button"
                    value={this.props.formType} onClick={this.handleSubmit}/>
                  {this.renderDemo()}
                </form>

              </div>

              <div className="session-form-footer">
                {this.navLink()}
              </div>
            </div>

            <div className="welcome-form-container">
              <p>Welcome to Blue Prints</p>
              <p>Enjoy all the wonderful blue prints that are made
                available by the community!</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(SessionForm);
