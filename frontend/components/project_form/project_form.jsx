import React from 'react';
import { Route, Link } from 'react-router-dom';
import StepForm from './step_form';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { steps:
                    { 1: { title: "sample", body: "body", } },
                    toggled: false,
                    amount }
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
    if (window.scrollY > 118 && formHeader){
      formHeader.classList.add("project-form-navbar-fixed");
    } else if (window.scrollY < 118 && formHeader){
      formHeader.classList.remove("project-form-navbar-fixed");
    } else {
      return null;
    }
  }

  handleSubmit(e){
    e.preventDefault();
  }

  toggleDropdown(){
    return(){

    }
  }

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <button className="project-form-navbar-attachment">
          <span className="plus-icon">+</span>Click to Add Images
        </button>
        <div className="project-form-navbar-buttons-menu">
          <button
            className='project-form-navbar-button add'
            onClick={this.toggleDropdown}>
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
    this.state.amount += 1;
    this.setState({ [this.state.amount]: { title: "", body: "", }})
  }

  update(field){
  }

  renderSteps(){
    const stepButtons = Object.keys(this.state.steps).map( (stepId) => {
      let step = (parseInt(stepId) === 1) ? "Intro" : `Step ${stepId - 1}`
      return (
        <li key={parseInt(stepId)} className='project-form-step'>
          <div className='project-form-step-images'>
            Drag Images From Top Bar
          </div>
          <Link to={`/projects/new/steps/${parseInt(stepId)}`}
            className='project-form-step-link'>
            {step}: {this.state[stepId].title}
          </Link>
        </li>
      )
    })

    return (
      <div className="steps-container">
        <ul className="project-form-step-list">
          {stepButtons}
        </ul>
        <button className="project-form-steps-add-button"
          onClick={this.addStep}>Add step</button>
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
