import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app/app.css'
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import MainRouter from "./app/route/main-route";
const store = configureStore();

ReactDOM.render(<Provider store={store}><MainRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
