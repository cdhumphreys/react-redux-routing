import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';


// import stylesheets
import css from './stylesheet.scss';


// import components
import Main from './components/Main.js';
import PhotoGrid from './components/PhotoGrid.js';
import Single from './components/Single.js';

// import store and store history
import store, { history } from './store.js';


const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Main}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="view/:postID" component={Single}></Route>			
			</Route>		
		</Router>
	</Provider>
);
ReactDOM.render(routes, document.getElementById('app'));