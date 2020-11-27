import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {multiClientMiddleware} from 'redux-axios-middleware';
import reportWebVitals from './reportWebVitals';

import api from './actions/api';
import routes from './routes/routes'
import rootReducer from "./reducers";

const history = createBrowserHistory();
const appRouterMiddleware = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(multiClientMiddleware(api), appRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer(history));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} children={routes}/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
