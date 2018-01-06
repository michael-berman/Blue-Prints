import React from 'react';

class StepForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { title: "", body: "" }
  }

  update(field){
    return e => this.setState({[field]: e.target.value})
  }

  render (){
    return (
      <form className="step_form">
        <button className="step_form_attachment">Add images</button>
        <input type='text' value={this.state.title}
          onChange={this.update('field')}/>
        <textarea value={this.state.body} onChange={this.update('body')}
          />
      </form>
    )
  }
}

export default StepForm;
