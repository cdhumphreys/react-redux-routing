import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// can pass the state (posts & comments) and the dispatch actions to the Main component 
// directly rather than passing down several children
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;