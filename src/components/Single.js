import React from 'react';
import Photo from './Photo';

// import comments
import Comments from './Comments';


class Single extends React.Component {
	render() {
		const postID = this.props.params.postID;
		const postIndex = this.props.posts.map((entry, index) => {return entry.code;}).indexOf(postID);
		const post = this.props.posts[postIndex];
		const postComments = this.props.comments[postID] || [];

		return (
			<div>
				<Photo index={postIndex} {...this.props} post={post}/>
				<h2> Comments: </h2>
				<Comments {...this.props} postID ={postID} index={postIndex} postComments={postComments}/>
			
	
			</div>
		)
	}
}

export default Single;