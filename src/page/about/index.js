import React, {Component} from 'react'
import Header from '../../component/header'

class About extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){

    }

    render() {
        return (<div><Header />
            <div className="page-container">关于页面</div>
        </div>)
    }
}

export default About
