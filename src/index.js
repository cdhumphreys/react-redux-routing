import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';


// import stylesheets
import css from './stylesheet.scss';


// import components
import App from './components/App.js';
import PhotoGrid from './components/PhotoGrid.js';
import Single from './components/Single.js';

// import store and store history
import store, { history } from './store.js';


const routes = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="view/:postID" component={Single}></Route>			
			</Route>		
		</Router>
	</Provider>
);
ReactDOM.render(routes, document.getElementById('app'));