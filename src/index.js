import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Switch,
} from 'react-router';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import Login from "./components/Login";
import {Provider} from "mobx-react"
import store from './store'
import createBrowserHistory from 'history/createBrowserHistory';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

const stores = {
    // Key can be whatever you want
    routingStore: routingStore,
    // ...other stores
    ...store
};

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route component={App}/>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
