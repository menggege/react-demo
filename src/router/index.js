import React, {Component} from 'react'
import  {BrowserRouter, HashRouter, Switch, Router, Route, Redirect} from 'react-router-dom'
import {Home, News, About, Job} from './component'


export default class Root extends Component {
    render() {
        return (<HashRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/about" component={About}/>
            </Switch>
        </HashRouter>)
    }
}