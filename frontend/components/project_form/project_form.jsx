import React from 'react';
import { Route, Link } from 'react-router-dom';
import StepForm from './step_form';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { 1: { title: "", body: "", }}
    this.amount = 1;
    this.addStep = this.addStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  componentWillUnmount(){
    let formHeader = document.querySelector(".project-form-navbar-fixed");
    if (formHeader){
      formHeader.classList.remove("project-form-navbar-fixed");
    }
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(){
    let formHeader = document.querySelector(".project-form-navbar");
    if (window.scrollY > 120 && formHeader){
      formHeader.classList.add("project-form-navbar-fixed");
    } else if (window.scrollY < 120 && formHeader){
      formHeader.classList.remove("project-form-navbar-fixed");
    } else {
      return null;
    }
  }

  handleSubmit(e){
    e.preventDefault();
  }

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <button className="project-form-navbar-attachment">
          <span className="plus-icon">+</span>Click to Add Images
        </button>
        <div className="project-form-navbar-buttons-menu">
          <button
            className='project-form-navbar-button add'>
            + Add <span className="caret"></span></button>
          <button onClick={this.handleSubmit}
            className='project-form-navbar-button submit'>
            Publish
          </button>
        </div>
      </nav>
    )
  }

  addStep(){
    this.amount += 1;
    this.setState({ [this.amount]: { title: "", body: "", }})
  }

  update(field){
  }

  renderSteps(){
    const stepButtons = Object.keys(this.state).map( (stepId) => {
      return (
        <li key={parseInt(stepId)} className='project-form-step-links'>
          <Link to={`/projects/new/steps/${parseInt(stepId)}`}></Link>
        </li>
      )
    })

    return (
      <div className="steps-container">
        <ul>
          {stepButtons}
        </ul>
        <button onClick={this.addStep}>Add step</button>
      </div>
    )
  }

  renderSpecificForm(){
    if(this.props.match.path === '/projects/new'){
      return this.renderSteps();
    } else {
      return <StepForm step={this.state} />;
    }
  }

  render(){
    return (
      <div className="project-form-wrapper" >
        <div className="project-form-container">
          {this.renderFormHeader()}
          <div className="project-form-body">
            {this.renderSpecificForm()}
          </div>
          <Route path="/projects/new/steps/:stepId" />
        </div>
      </div>
    )
  }
}

export default ProjectForm;
