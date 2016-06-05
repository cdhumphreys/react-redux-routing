import React from 'react';
import { Link } from 'react-router';
class Photo extends React.Component {
	render() {
		const { post, comments } = this.props;
		return(
			<figure style={{border: '1px solid black', position: 'relative', width: '300px', height:'300px'}}>
				<div>
					<Link to={"/view/" + post.code}>
						<img src={post.display_src} style = {{display: 'block', width: '200px', height: '200px', margin: '0 auto'}} />
						<figcaption style={{textAlign: 'center'}}>{post.caption}</figcaption>											 
					</Link>
					<button onClick={this.props.incrementLikes.bind(null, this.props.index)}>&hearts; {post.likes}</button>
				</div>
				<figcaption>
					<span>
						<Link to={"/view/" + post.code}>
						Comments: {comments[post.code] ? comments[post.code].length : 0}
						</Link>
					</span>
				</figcaption>
			</figure>
		)
	}	
	
}

export default Photo;