import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import costumeReducer from './reducers/costumeReducer'
import categoryReducer from './reducers/categoryReducer'
import App from './App';

//compose allows you to chain together middleware
//allows access to devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  costumeState: costumeReducer, 
  categoryState: categoryReducer
})

//store - where data will be stored globally - send action object to reducer
//reducers will tell us what we do with our store based on actions - return new version
// first element is the reducer 
// second is any sort of middleware - thunk
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)