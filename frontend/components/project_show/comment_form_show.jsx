import React from 'react';

class CommentFormShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", projectId: this.props.projectId }
    this.updateComment = this.updateComment.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  renderComments(){
    const comments = this.props.comments;
    if (comments > 0) {
      comments.map( (comment, idx) => {
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
    } else {
      return null;
    }
  }

  updateComment(field){
    return e => this.setState({ [field]: e.target.value })
  }

  handleCommentSubmit(e){
    debugger
    this.props.createComment(this.state);
  }

  render(){
    return (
      <div className="comments-wrapper">
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
