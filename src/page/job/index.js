import React, {Component} from 'react'
import Header from '../../component/header'

class Job extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Header />
            <div className="page-container">加入我们</div>
        </div>)
    }
}

export default Job