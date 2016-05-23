import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Needed for webpack to know to watch and compile 
import css from './stylesheet.scss';


// path components
import Main from './components/Main.js';
import PhotoGrid from './components/PhotoGrid.js';
import Single from './components/Single.js';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:photoID" component={Single}></Route>
		</Route>
	</Router>	
);
ReactDOM.render(routes, document.getElementById('app'));