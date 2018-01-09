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
    debugger
    if (comments.length > 0) {
      const renderedComments = comments.map( (comment, idx) => {
        debugger
        return (
          <li className="comment-list-item" >
            <h3 className="comment-list-item-header">
              {comment.author}
            </h3>
            <p className="comment-list-item-body">
              {comment.body}
            </p>
          </li>
        )
      })
      debugger
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
    this.props.createComment(this.state).then;
  }

  render(){
    return (
      <div className="comments-wrapper">
        <h1 ></h1>
        <form className="comments-form-container"
          onSubmit={() => this.handleCommentSubmit()}>
          <textarea className="comments-form-input"
            onChange={this.updateComment('body')}/>
          <button>Post Comment</button>
        </form>
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentFormShow;
