import React, {Component} from 'react'
import Header from '../../component/header'
import NewsList from './component/news'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <Header />
            <div className="page-container">
                <NewsList/>
            </div>
        </div>)
    }
}

export default Home