import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class StepForm extends React.Component {
  constructor(props){
    super(props);
    if (this.props.step.title === "(click to edit)"){
      this.state = { title: "", body: "" }
    } else {
      this.state = this.props.step;
    }
    this.updateStep = this.updateStep.bind(this);
    this.sendSteptoProject = this.sendSteptoProject.bind(this);
  }

  updateStep(field){
    return e => this.setState({[field]: e.target.value})
  }

  sendSteptoProject(e){
    e.preventDefault();
    this.props.handleStep(this.props.stepId, this.state);
    this.props.history.push('/projects/new');
  }

  render (){
    
    return (
      <div className='step-form-wrapper'>
        <div className='step-form-attachments'>
          <h1>Drag Images From Top Bar</h1>
        </div>
        <form className="step-form-container">
          <input type='text' value={this.state.title}
            onChange={this.updateStep('title')}
            className='step-form-title'
            placeholder={`Step ${this.props.stepId}: Type your title ...`}/>
          <br/>
          <textarea value={this.state.body}
            onChange={this.updateStep('body')}
            className='step-form-body'
            /><br />
          <button onClick={this.sendSteptoProject}
            className='step-form-back-button'>
            Back to Steps
          </button>
        </form>
    </div>
    )
  }
}

// <Link to="/projects/new"
//   className='step-form-back-button' Back to Steps
//   onClick={this.props.handleStep(this.props.stepId, this.state)}
//   >Back to Steps</Link>
export default withRouter(StepForm);
