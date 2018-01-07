import React from 'react';
import { Link } from 'react-router-dom';

class StepForm extends React.Component {
  constructor(props){
    super(props);
    if (this.props.step.title === "(click to edit)" ){
      this.state = {
                    title:
                      `Step ${this.props.stepId}:Type your title ...`,
                    body: ""
                  }
    } else {
      this.state = this.props.step;
    }
    this.updateStep = this.updateStep.bind(this);
  }

  updateStep(field){
    return e => this.setState({[field]: e.target.value})
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
            className='step-form-title' /><br/>
          <textarea value={this.state.body}
            onChange={this.updateStep('body')}
            className='step-form-body'
            /><br />
          <Link to="/projects/new"
            onClick={this.props.update(this.props.stepId, this.state)}
            >Back to Steps</Link>
        </form>
    </div>
    )
  }
}

export default StepForm;
