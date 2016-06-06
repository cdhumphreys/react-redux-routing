import React from 'react';

class Comments extends React.Component {
	

	render() {
		const { postID, comments, index } = this.props;
		return (
			<ul>
				{comments[postID].map((entry, index) => {
					return ( 
					<li key={index}>
						<div>User: <strong>{entry.user}</strong></div>
						<div>Comment: <i>{entry.text}</i></div>
						<br/>
					</li>
					
					)
				})}
			</ul>
		)
	}
}

export default Comments;