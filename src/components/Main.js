import React from 'react';
import { Link } from 'react-router';

// React.cloneElement(this.props.children...) is used to pass down as props which element
// switch out the child components using react-router ad also gives the children props from Main

class Main extends React.Component {
	render() {
		return (
			<div>
				<h1><Link to="/"> Reduxstagram! </Link></h1>

				{React.cloneElement(this.props.children, this.props)}

			 </div>
		)
	}
}

export default Main;