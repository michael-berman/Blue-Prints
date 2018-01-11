import React from 'react';

class CommentFormShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", projectId: this.props.projectId,
                    errors: ""}
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
              <img src={comment.profile_pic} />
              <div className='comment-list-item-header-info'>
                <h3 className="comment-list-item-header">
                  {comment.author}
                </h3>
                <p className='comment-list-item-date'>{date}</p>
              </div>
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
    if (this.props.currentUser){
      this.setState({ errors: "" })
      this.props.createComment(this.state).then( () =>
        window.location.reload());
    } else {
      this.setState({ errors: "Must be signed in to write a comment"})
    }
  }

  renderCommentError(){
    if (this.state.errors === ""){
      return (
        <div className="comments-form-btn-container">
          <button className="comments-form-button">Post Comment</button>
        </div>
      )
    } else {
      return (
        <div className="comment-error-container">
          <span>{this.state.errors}</span>
          <button className="comments-form-button-with-comment-error">Post Comment</button>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="comments-wrapper">
        <h1 className='project-show-step-title comment-header'>Comments</h1>
      <div className="comments-form-wrapper">
        <div className="comments-form-img-container">
          <img src={this.props.currentUser.image_url} />
        </div>
        <form className="comments-form-container"
          onSubmit={() => this.handleCommentSubmit()}>
          <textarea className="comments-form-input"
            onChange={this.updateComment('body')}/><br />
          {this.renderCommentError()}
        </form>
      </div>
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentFormShow;
