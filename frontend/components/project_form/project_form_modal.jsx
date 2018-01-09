import React from 'react';

class ProjectFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "" }
    this.update = this.update.bind(this);
  }

  update(field){
    return e => this.setState({ [field] :e.target.value });
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
            <form onSubmit={() => this.props.updateProjectTitle(this.state.title)}
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
