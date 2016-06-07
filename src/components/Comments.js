import React from 'react';

class Comments extends React.Component {
	
	handleSubmit(e) {
		e.preventDefault();
		const postID = this.props.postID;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		
		this.props.addComment(postID, author, comment);

		this.refs.comment.value = '';
	}

	render() {
		const { postID, postComments, index } = this.props;
		return (
			<div>
				{postComments.map((entry, index) => {
					return ( 
					<div key={index}>
						<p>User: <strong>{entry.user}</strong></p>
						<p>Comment: <i>{entry.text}</i></p>
						<button onClick={this.props.removeComment.bind(null, postID, index)}>Delete</button>
					</div>
					
					)
				})}
				<form ref="submitComment" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="author" placeholder="Author" />
					<input type="text" ref="comment" placeholder="Comment" />
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
}

export default Comments;