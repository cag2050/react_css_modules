import React, {Component} from 'react';
// import './App.css';
import MyLayout from './components/MyLayout'
import {withRouter} from 'react-router'
// import DevTools from 'mobx-react-devtools'
// import {Provider} from "mobx-react"
// import stores from './store'

class App extends Component {
    render() {
        return (
            //<Provider {...stores}>
                <div style={{height: '100%'}}>
                    <MyLayout/>
                    {/*<DevTools/>*/}
                </div>
            //</Provider>
        );
    }
}

export default withRouter(App);
