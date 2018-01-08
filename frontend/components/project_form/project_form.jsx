import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import StepForm from './step_form';
import ProjectFormAddDropdown from './project_form_dropdown';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { steps:
                    { 0:
                      { title: "(click to edit)", body: "body",
                        images: { 0:
                                  { imageFile: null, imageURL: null }
                                }
                      }
                    },
                    amount: 1,
                    mainImage: {imageFile: null, imageURL: null},
                  }
    this.addStep = this.addStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.updateFileMain = this.updateFileMain.bind(this);
    this.updateFileStep = this.updateFileStep.bind(this);
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
    const file = this.state.mainImage.imageFile;

    const formData = new FormData();
    if (file) formData.append("project[main_image]", file);


  }

  updateFileMain(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    const setStater = () => {
      this.setState({
        mainImage: { imageFile: file, imageUrl: fileReader.result }
      })
    }

    // fileReader.onloadend = () => {
    //   this.setState({
    //     mainImage: { imageFile: file, imageUrl: fileReader.result}
    //   })
    // }

    if (file) {
      fileReader.readAsDataURL(file);
      // fileReader.onloadend();
    }

    if (fileReader.readyState === 1) {
      setStater();
    }


  }

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <form className="project-form-navbar-attachment">
          <input type='file'
            onChange={this.updateFileMain}/>
          <div className='plus-icon'>Click for Main Images</div>
        </form>
        <div className="project-form-navbar-buttons-menu">
          <ProjectFormAddDropdown addStep={this.addStep}
            updateFileMain={this.updateFileMain}/>
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
    let newState = merge({},
                    this.state,
                    { steps:
                      {[this.state.amount - 1]: { title: "(click to edit)", body: "", }}
                    });
    this.setState(newState);
  }

  handleStep(stepId, step){
    this.setState(merge({},
                    this.state,
                    { steps:
                      {[stepId]: step }
                    }));
  }

  scrollUp(){
    window.scrollTo(0,130);
  }

  updateFileStep(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    const pathname = e.target.parentElement.parentElement.parentElement.children[1].href
    const stepId = pathname.slice(pathname.length - 1);

  }

  renderStepImages(stepId){
    if (this.state.steps[stepId].images[0].imageURL){
      return null
    } else {
      return (
        <div className='step-icon'>Click for Step Images</div>
      )
    }
  }

  renderSteps(){
    const stepButtons = Object.keys(this.state.steps).map( (stepId) => {
      let step = (parseInt(stepId) === 0) ? "Intro" : `Step ${stepId}`
      let stepNum = (parseInt(stepId) === 0) ? 0 : parseInt(stepId);
      return (
        <li key={stepNum} className='project-form-step'>
          <div className='project-form-step-images'>
            <form className="">
              <input type='file'
                onChange={this.updateFileStep}/>
              {this.renderStepImages(stepNum)}
            </form>
          </div>
          <Link to={`/projects/new/steps/${stepNum}`}
            onClick={this.scrollUp}
            className='project-form-step-link'>
            {step}: {this.state.steps[stepId].title}
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
    if(this.props.location.pathname === '/projects/new'){
      return this.renderSteps();
    } else {
      let path = this.props.location.pathname;
      let stepId = path.slice(path.length - 1);
      return <StepForm stepId={stepId} handleStep={this.handleStep}
        step={this.state.steps[stepId]} />;
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

export default withRouter(ProjectForm);
