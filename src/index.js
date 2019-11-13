import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import {store, persistor } from './redux/store';


ReactDOM.render(
	// Provider is a component that is the parent of everything inside of the application
	// It allows us to get access to all of the things realted to the store
	<Provider store={store}>   
		<BrowserRouter>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')

);

