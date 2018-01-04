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
  }

  componentDidMount(){
    this.props.clearSessionErrors();
  }

  navLink(){
    if (this.props.formType === 'Signup') {
      return (
              <span className="session-login-link">
                <p>Already a member? <Link to='/login'> Login</Link> </p>
              </span>
            )
    } else {
      return <Link to='/signup'>Sign Up</Link>
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.submitForm(user).then(() => this.props.history.push('/'));
  }

  demoLogin(){
    const user = {username: "guest demo", password: "hunter12"}
    this.setState(user);
    setTimeout(() => {
      this.props.submitForm(user).then(() => {
        this.props.history.push('/')})}, 300);
  }

  update(field){
    return e => {
      return this.setState({ [field]: e.target.value })
    }
  }

  renderEmail(){
    if (this.props.formType === 'Signup'){
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
    const formButton = (this.props.formType === "Signup") ? "Sign Up" : "Login"
    return (
      <div className="session-outer-wrapper" >
      <div className="session-wrapper">

        <div className="session-header-container">
          <h1 className="session-header" ><strong>{this.props.formType}</strong></h1>
        </div>

        <article className="session-page">
          <div className="session-form-column" >
            <section className="session-form-container">

              <input type="submit" className="session-form-submit-demo"
                onClick={this.demoLogin} value="Demo Login"/>

              <div className="session-form-divider">
                <p>OR</p>
              </div>

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
                    value={formButton} onClick={this.handleSubmit}/>
                </form>


            </section>
            <div className="session-form-footer">
              {this.navLink()}
            </div>
          </div>

            <div className="welcome-form-container">
              <p>Welcome to Blue Prints!</p><br />
              <p>Enjoy all the wonderful blue prints that are made
                available by the community!</p>
            </div>


        </article>
    </div>
  </div>
    )
  }
}


export default withRouter(SessionForm);
