import React, {Component} from 'react'
import  {BrowserRouter, HashRouter, Switch, Router, Route, Redirect} from 'react-router-dom'
import Layout from '../page/layout'
import {Home, News, About,Job} from './component'


export default class Root extends Component {
    render() {
        return (<HashRouter>
            <Switch>
                <Route path="/job" component={Job}/>
                <Layout>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" component={News}/>
                    <Route path="/about" component={About}/>
                </Layout>
            </Switch>
        </HashRouter>)
    }
}