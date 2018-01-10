import React from 'react';

class CommentFormShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", projectId: this.props.projectId }
    this.updateComment = this.updateComment.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  renderComments(){
    const comments = this.props.comments;
    if (comments && comments.length > 0) {
      const renderedComments = comments.map( (comment, idx) => {
        let date = comment.date.slice(0, 10);
        return (
          <li key={idx} className="comment-list-item">
            <div className='comment-list-item-header-container'>
              <h3 className="comment-list-item-header">
                {comment.author}
              </h3>
              <p className='comment-list-item-date'>{date}</p>
          </div>
            <p className="comment-list-item-body">
              {comment.body}
            </p>
          </li>
        )
      })
      return (
        <ul className="comment-list">
          {renderedComments}
        </ul>
      )
    } else {
      return null;
    }
  }

  updateComment(field){
    return e => this.setState({ [field]: e.target.value })
  }

  handleCommentSubmit(e){
    this.props.createComment(this.state).then( () =>
      this.props.history.push(`/projects/${this.props.projectId}`));
  }

  render(){
    return (
      <div className="comments-wrapper">
        <h1 className='project-show-step-title comment-header'>Comments</h1>
      <div className="comments-form-wrapper">
        <form className="comments-form-container"
          onSubmit={() => this.handleCommentSubmit()}>
          <textarea className="comments-form-input"
            onChange={this.updateComment('body')}/><br />
          <button className="comments-form-button">Post Comment</button>
        </form>
      </div>
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentFormShow;
