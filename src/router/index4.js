import React, {Component} from 'react'
import  {BrowserRouter, HashRouter, Switch, Router, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'
import Layout from '../page/layout/index2'
import {Home, News, About, Job} from './component'


export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route path="/job" component={Job}/>
                        <Route path="/" component={Layout}/>
                    </Switch>
                </HashRouter>
            </Provider>)
    }
}