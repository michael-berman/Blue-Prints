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
                    { 1:
                      { title: "(click to edit)", body: "body",
                        images: {  }
                      }
                    },
                    amount: 1,
                    coverImage: {imageFile: null, imageURL: null},
                    errors: "",
                    loading: false
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
    this.deleteStep = this.deleteStep.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    if (this.props.fetchProject){
      this.props.fetchProject(parseInt(this.props.match.params.projectId));
    }
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  componentDidUpdate(){
    if (this.state.amount === 1 &&
        this.props.match.path === "/projects/:projectId/edit"){
      this.updateEditState();
    }
  }

  updateEditState(){
    let newState = { title: "", steps: {}, amount: 0 };
    newState.title = this.props.project.title;
    this.props.steps.forEach( (step, i) => {
      newState.steps[i + 1] = {
        title: step.title, body: step.body, images: {} };
        step.photos.forEach( (photo, j) =>{
          newState.steps[i + 1].images[j] = photo;
        })
        this.state.amount += 1;
      })
    newState.amount = this.props.steps.length;
    debugger
    let merged = merge({}, this.state, newState);
    this.setState(merged);
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
    const stepTitle = this.state.steps[1].title;
    const stepBody = this.state.steps[1].body;
    const stepImagesLength = Object.values(this.state.steps[1].images).length;

    if ( stepTitle !== "(click to edit)" && stepBody !== "body" &&
          stepImagesLength > 0){
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

    this.setState({ loading: true });

    this.props.submitProject(formData).then( data =>
      this.props.history.push(`/projects/${data.project.id}`));
    } else {
      this.setState({ errors: "Please complete at least one step" })
    }
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
        <div className='plus-icon'>
          <i className="fa fa-plus plus-big-icon" aria-hidden="true"></i>
          Click for Main Images
        </div>
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
                      {[this.state.amount]: {
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
        <div className='step-icon'>
          <i className="fa fa-plus plus-medium-icon " aria-hidden="true"></i>
          Click for Step Images</div>
      )
    }
  }

  deleteStep(stepId){
    let oldState = Object.assign({}, this.state);
    delete oldState.steps[stepId];
    let steps = {};
    Object.keys(oldState.steps).map( (step, idx) => {
      steps[idx + 1] = oldState.steps[step];
    });
    let newState = Object.assign({}, oldState, {steps: steps})
    newState.amount -= 1;

    this.setState(newState);
    debugger
  }

  renderSteps(){
    let path;
    if (this.props.match.path === "/projects/:projectId/edit"){
      path = `/projects/${this.props.match.params.projectId}/edit/steps`
    } else {
      path  = '/project/new/steps/'
    }
    const stepButtons = Object.keys(this.state.steps).map( (stepId) => {
    let step = `Step ${stepId}`;
    let stepNum = (parseInt(stepId) === 1) ? 1 : parseInt(stepId);
      return (
        <li key={stepNum} className='project-form-step'>
          <div className='project-form-step-images'>
            <form className="">
              {this.previewStepImages(stepId)}
              <input type='file'
                onChange={this.updateFileStep}/>
            </form>
          </div>
          <Link to={`${path}${stepNum}`}
            onClick={this.scrollUp}
            className='project-form-step-link'>
            {step}: {this.state.steps[stepId].title}
          </Link>
          <button className="project-form-step-delete-btn"
            onClick={ () => this.deleteStep(stepId)} >
            <i className="fa fa-times fa-2x close-step-icon" aria-hidden="true"></i>
          </button>
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
    const path = this.props.location.pathname;
    if(path === '/projects/new' ||
      path.slice(path.length - 4, path.length) === "edit"){
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
    if (this.props.fetchProject === undefined){
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
    } else {
      return null;
    }
  }

  renderErrors(){
    if (this.state.errors === ""){
      return null;
    } else {
      return (
        <div className="project-form-error-container">
          {this.state.errors}
        </div>
      )
    }
  }

  renderSpinner(){

    if (this.state.loading){
      return (
        <div className='loading-wrapper' >
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }


  render(){
    return (
      <div className="project-form-wrapper">
        <div className="project-form-modal-wrapper">
          {this.renderTitleModal()}
        </div>
        <div className="project-form-container">
          {this.renderSpinner()}
          {this.renderFormHeader()}
          {this.renderErrors()}
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
