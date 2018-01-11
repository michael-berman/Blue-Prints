import React from 'react';

class ProjectFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "" , errors: ""}
    this.update = this.update.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field){
    return e => this.setState({ [field] :e.target.value });
  }

  updateTitle(){
    if (this.state.title === ""){
      this.setState({ errors: "Please enter a title for the project"})
    } else {
      this.props.updateProjectTitle(this.state.title)
    }
  }

  renderErrors(){
    if (this.state.errors === "") {
      return null;
    } else {
      return (
        <div className='project-form-modal-errors'>
          {this.state.errors}
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        <div className='modal-background faded-background'></div>
        <div
          className='project-form-modal-container animated slideInDown'>
          <div className='project-form-modal-header'>
            <img src="/images/create-intro-header.png" />
          </div>
          <div className='project-form-modal-body'>
            {this.renderErrors()}
            <form onSubmit={this.updateTitle}
              className='project-form-modal-form'>
              <input type='text' onChange={this.update('title')}
                className='project-form-modal-input'/><br />
              <button className='project-form-modal-button'>
                Start Blue Print
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectFormModal;
