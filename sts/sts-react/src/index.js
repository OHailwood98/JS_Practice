import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { userLoggedIn } from './actions/auth';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if(localStorage.stsToken){
    const user = {token:localStorage.stsToken};
    store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
 document.getElementById('root'));
//serviceWorker.unregister();