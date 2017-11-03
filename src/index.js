import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));
//todo Here, min 4:04 video https://youtu.be/RCPMuJ0zYak?t=4m4s

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
