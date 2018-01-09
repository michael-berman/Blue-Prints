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
      <div className='project-form-modal-container'>
        <div className='project-form-modal-header'>
          <img src="app/assets/images"
        </div>
        <div className='project-form-modal-body'>
          <form onSubmit={() => this.props.updateProjectTitle(this.state.title)}>
            <input type='text' onChange={this.update('title')}/>
            <button className='project-form-modal-button'>
              Start Blue Print
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ProjectFormModal;
