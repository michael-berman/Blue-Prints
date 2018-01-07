import React from 'react';

class StepForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.step;
    this.updateStep = this.updateStep.bind(this);
  }

  updateStep(field){
    return e => this.setState({[field]: e.target.value})
  }

  render (){
    debugger
    return (
      <div className='step-form-wrapper'>
        <div className='step-form-attachments'>
        </div>
        <form className="step-form-container">
          <input type='text' value={this.state.title}
            onChange={this.updateStep('field')}
            className='step-form-title' />
          <textarea value={this.state.body}
            onChange={this.updateStep('body')}
            className='step-form-body'
            />
          <Link to="/projects/new" onClick=
        </form>
    </div>
    )
  }
}

export default StepForm;
