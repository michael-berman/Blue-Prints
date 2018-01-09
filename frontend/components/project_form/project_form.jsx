import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

import StepForm from './step_form';
import ProjectFormAddDropdown from './project_form_dropdown';
import ProjectFormModal from './project_form_modal';

class ProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                title: "",
                steps:
                    { 0:
                      { title: "(click to edit)", body: "body",
                        images: {  }
                      }
                    },
                    amount: 1,
                    coverImage: {imageFile: null, imageURL: null},
                  }
    this.addStep = this.addStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.updateFileMain = this.updateFileMain.bind(this);
    this.updateFileStep = this.updateFileStep.bind(this);
    this.previewStepImages = this.previewStepImages.bind(this);
    this.previewMainImageAttachments = this.previewMainImageAttachments.bind(this);
    this.renderTitleModal = this.renderTitleModal.bind(this);
    this.updateProjectTitle = this.updateProjectTitle.bind(this);
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
    const file = this.state.coverImage.imageFile;

    const formData = new FormData();
    formData.append("project[title]", this.state.title)
    if (file) {
      formData.append("project[image]", file);
    }

    const steps = Object.values(this.state.steps);
    steps.forEach( step => {

      formData.append("project[steps_attributes][][title]", step.title);
      formData.append("project[steps_attributes][][body]", step.body);

      Object.values(step.images).forEach( photo => {

        formData.append("project[steps_attributes][][photos_attributes][][image]", photo.imageFile)
      })

    })

    this.props.createProject(formData).then( data =>
      this.props.history.push(`/projects/${data.project.id}`));

  }

  updateFileMain(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    const setStater = () => {
      this.setState({
        coverImage: { imageFile: file, imageURL: fileReader.result }
      })
    }

    fileReader.onloadend = () => {
      setStater();
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  previewMainImageAttachments(){
    if (this.state.coverImage.imageURL){
      return (
        <div className='main-image-attachment-container'>
          <img className='main-image-attachment'
            src={`${this.state.coverImage.imageURL}`} />
        </div>
      )
    } else {
      return (
        <div className='plus-icon'>Click for Main Images</div>
      )
    }
  }

  renderFormHeader(){
    return(
      <nav className="project-form-navbar">
        <form className="project-form-navbar-attachment">
          <input type='file'
            onChange={this.updateFileMain}/>
          {this.previewMainImageAttachments()}
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
                      {[this.state.amount - 1]: {
                                                  title: "(click to edit)",
                                                  body: "",
                                                  images: {}
                                                  }}
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

    const pathname = e.target.parentElement.parentElement.parentElement.children[1].href;
    const stepId = pathname.slice(pathname.length - 1);
    const step = this.state.steps[stepId].images;
    let amount;
    if (step){
      amount = Object.values(step).length;
    } else {
      amount = 0;
    }

    fileReader.onloadend = () => {
      this.setState(merge({},
                        this.state,
                        {
                          steps:
                          {
                            [stepId]: {
                                images: { [amount + 1]: {
                                                      imageFile: file,
                                                      imageURL: fileReader.result
                                                    }
                                }
                            }
                          }
                        }
                      )
      )
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }

  }

  previewStepImages(stepId){
    let images = Object.values(this.state.steps[stepId].images);
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
              {this.previewStepImages(stepId)}
              <input type='file'
                onChange={this.updateFileStep}/>
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
        step={this.state.steps[stepId]}
        images={this.state.steps[stepId].images}/>;
    }
  }

  updateProjectTitle(title){
    this.setState(merge({},
                    this.state,
                    { title: title })
                  );
  }

  renderTitleModal(){
    let modalBackground = document.querySelector('.modal-background');
    let modal = document.querySelector('.project-form-modal-container');
    if (this.state.title === "") {
      return (
        <ProjectFormModal
          updateProjectTitle={this.updateProjectTitle} />
      )
    } else if (modalBackground){

      modal.classList.remove("slideInDown");
      modal.classList.add("fadeOutUp");
      modalBackground.classList.remove('faded-background');

      return (
        <ProjectFormModal
          updateProjectTitle={this.updateProjectTitle} />
      )

    } else {
      return null;
    }
  }


  render(){
    return (
      <div className="project-form-wrapper" >
        <div className="project-form-modal-wrapper">
          {this.renderTitleModal()}
        </div>
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
