import React, {Component} from 'react'
import Footer from '../../component/footer'

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div>
            <div>
                {this.props.children}
            </div>
            <Footer/>
        </div>)
    }
}

export default Layout