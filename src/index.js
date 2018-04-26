import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
