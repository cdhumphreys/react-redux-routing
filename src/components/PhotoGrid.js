import React from 'react';
import Photo from './Photo';
class PhotoGrid extends React.Component {
	render() {
		return(
			<div className="reddy"> 
				{this.props.posts.map((post, index) => {
					return <Photo key={index} index={index} post={post} {...this.props}/>
				})}
			</div>
		)
	} 
}

export default PhotoGrid;