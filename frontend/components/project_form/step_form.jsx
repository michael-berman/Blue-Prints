import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { quillModules, quillFormats } from '../../util/quill_toolbar_config';
// import 'react-quill/dist/quill.snow.css';

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
    this.CustomToolbar = (
      <div id="toolbar">
        <select className="ql-header">
          <option value="1"></option>
          <option value="2"></option>
          <option selected></option>
        </select>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
      </div>
    )
  }

  updateStep(field){
    return e => this.setState({[field]: e.target.value})
  }

  sendSteptoProject(e){
    e.preventDefault();
    let path;
    if (this.props.match.path == "/projects/:projectId/edit"){
      path = this.props.match.url;
    } else {
      path = '/projects/new';
    }
    this.props.handleStep(this.props.stepId, this.state);
    this.props.history.push(path);
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
          <ReactQuill
            onchange={this.updateStep('body')}
            value={this.state.body}
            modules={quillModules}
            formats={quillFormats}
            theme="snow"
            />
          <button onClick={this.sendSteptoProject}
            className='step-form-back-button'>
            Back to Steps
          </button>
        </form>
    </div>
    )
  }
}

// <form className="step-form-container">
//   <input type='text' value={this.state.title}
//     onChange={this.updateStep('title')}
//     className='step-form-title'
//     placeholder={`Step ${this.props.stepId}: Type your title ...`}/>
//   <br/>
//   <textarea value={this.state.body}
//     onChange={this.updateStep('body')}
//     className='step-form-body'
//     /><br />
  // <button onClick={this.sendSteptoProject}
  //   className='step-form-back-button'>
  //   Back to Steps
  // </button>
// </form>
export default withRouter(StepForm);
