import React, {Component} from 'react'
import  {Switch, Route, Redirect} from 'react-router-dom'
import {Home, News, About} from '../../router/component'
import Footer from '../../component/footer'

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Switch>
                <Route path="/index" component={Home}/>
                <Route path="/news" component={News}/>
                <Route path="/about" component={About}/>
                <Redirect from="/" to="/index"/>
            </Switch>
            <Footer/>
        </div>)
    }
}

export default Layout