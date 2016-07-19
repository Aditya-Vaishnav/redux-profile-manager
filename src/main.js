import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index.js';

const logger = createLogger();
/*(store) => (next) => (action) => {
  console.log("Inside Logger == >", action)

  if (action.type != "SUBMIT") {
    next(action)
  } else {
    if (!store.getState().form.hasOwnProperty('id')) {
      const _action = Object.assign({}, action, {
        id: store.getState().list.length
      })
      console.log("After Change == >", _action)
      next(_action)
    }

  }
}*/
const store = createStore(allReducers, applyMiddleware(logger));
store.subscribe(() => {
  console.log("Subscribed ==> ", store.getState())
});


ReactDOM.render( < Provider store = { store } >
    < App / >
    < /Provider>  , document.getElementById('app'));
