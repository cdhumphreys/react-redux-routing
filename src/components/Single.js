import React from 'react';
import Photo from './Photo';

// import comments
import Comments from './Comments';


class Single extends React.Component {
	render() {
		const postID = this.props.params.postID;
		const postIndex = this.props.posts.map((entry, index) => {return entry.code;}).indexOf(postID);
		const post = this.props.posts[postIndex];

		return (
			<div>
				<Photo index={postIndex} {...this.props} post={post}/>
				<h2> Comments: </h2>
				<Comments postID ={postID} index={postIndex} {...this.props}/>
			
	
			</div>
		)
	}
}

export default Single;