import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

// Uncomment for Redux dev tools (https://github.com/zalmoxisus/redux-devtools-extension)
/* eslint-disable */
// const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, enhancer);
/* eslint-enable */

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
