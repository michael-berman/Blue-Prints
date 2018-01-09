import React from 'react';

class CommentFormShow extends React.Component {
  constructor(props) {
    super(props);
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

  render(){
    return (
      <div className="comments-wrapper">
        <form className="comments-form-container" >
          <textarea className="comments-form-input" />
          <button>Post Comment</button>
        </form>
        {this.renderComments()}
      </div>
    )
  }
}

export default CommentFormShow;
