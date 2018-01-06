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
  }

  handleSubmit(e){
    e.preventDefault();
  }

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <button className="project-form-navbar-attachment">
          Click to add images
        </button>
        <div className="project-form-navbar-buttons">
          <button onClick={this.handleSubmit}>
            hello</button>
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
      <div className="project-form-wrapper">
        {this.renderFormHeader()}
        {this.renderSpecificForm()}
        <Route path="/projects/new/steps/:stepId" />
      </div>
    )
  }
}

export default ProjectForm;
