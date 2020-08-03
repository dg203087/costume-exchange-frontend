import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redus-thunk'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';

//compose allows you to chain together middleware
//allows access to devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store - where data will be stored globally - send action object to reducer
//reducers will tell us what we do with our store based on actions - return new version
// first element is the reducer 
// second is any sort of middleware - thunk
let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

//provider so store is global to all components creates
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)