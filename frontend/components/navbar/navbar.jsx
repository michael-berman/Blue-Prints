import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarDropdown from './navbar_dropdown';


class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = { query: "" }
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  sessionLinks(){
    if(this.props.currentUser && this.props.user){
      return (
        <NavBarDropdown currentUser={this.props.currentUser}
          logout={this.props.logout}
          history={this.props.history}
          user={this.props.user}/>
      )
    } else {
      return (
        <nav className="login-signup-navlinks">
          <Link to="/login">Login</Link>
          <span className="nav-pipe">|</span>
          <Link to="/signup">Sign up</Link>
        </nav>
      )
    }
  }

  update(field){
    return e => this.setState( {[field]: e.target.value} )
  }

  handleSearch(e){
    e.preventDefault();
    this.props.searchProject(this.state.query).then(() => {
      this.props.history.push(`/projects/search`)});
  }

  render() {
    return (
      <section className="nav-bar">
        <Link to="/" className="nav-bar-home-link">
          <header className="nav-bar-logo" >
            <img src='/images/nav-bar-logo.png' />
            <h1>Blue Prints</h1>
          </header>
        </Link>
        <form className='nav-bar-search' onSubmit={this.handleSearch}>
          <input className='nav-bar-search-text' type='text'
            placeholder="Let's Make ..." onChange={this.update('query')}/>
          <button className="nav-bar-search-button">
            <i className="fa fa-search fa-lg search-icon" aria-hidden="true"></i>
          </button>
        </form>
        <button className='nav-bar-create-button'><Link to="/projects/new">Write a Blue Print</Link></button>
        <div className="nav-bar-session">
          {this.sessionLinks()}
        </div>
      </section>
    )
  }
};

export default withRouter(NavBar);
