import React, {Component} from 'react'
import {connect} from 'react-redux'
import {delNew} from '../../../store/news/action'
import '../index.scss'

class NewsList extends Component {
    constructor(props) {
        super(props)
    }

    del = (_index, event) => {
        this.props.delNew(_index);
    }

    render() {
        return (<div>
            <ul>
                {
                    this.props.news.map((item, index) => {
                        return (<li key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                            <div className="op" onClick={this.del.bind(this, index)}><span>删除</span></div>
                        </li>)
                    })
                }
            </ul>
        </div>)
    }
}

export default connect(state => ({
    news: state.News.list
}), {delNew})(NewsList)