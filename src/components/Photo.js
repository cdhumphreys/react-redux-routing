import React from 'react';
import { Link } from 'react-router';
class Photo extends React.Component {
	render() {
		return(
			<figure>
				<div style={{position: 'relative', width: '300px', height:'300px', border: '1px solid black'}}>
					<Link to={"/view/" + this.props.post.code}>
						<img src={this.props.post.display_src} style = {{display: 'block', width: '200px', height: '200px', margin: '0 auto'}} />
						<div style={{textAlign: 'center'}}>{this.props.post.caption}</div>
					</Link>
				</div>

			</figure>
		)
	}	
	
}

export default Photo;