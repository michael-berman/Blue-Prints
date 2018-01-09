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

  previewStepImages(stepId){
    let images = Object.values(this.props.images);
    if (images.length > 0){
      const imagePreviews = images.map( (image, idx) => {
        return (
          <li key={idx}>
            <img className="preview-step-image"
              src={`${image.imageURL}`} />
          </li>
        )
      })
      return(
        <ul className="preview-step-image-list">
          {imagePreviews}
        </ul>
      )
    } else {
      return null;
    }
  }

  render (){

    return (
      <div className='step-form-wrapper'>
        <div className='step-form-attachments'>
          {this.previewStepImages()}
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

export default withRouter(StepForm);
