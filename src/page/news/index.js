import React, {Component} from 'react'
import Header from '../../component/header'
import NewsList from './component/list'
import './index.scss'

class News extends Component {


    render() {
        return (<div><Header />
            <div className="news-list">
                <h3>新闻列表</h3>
                <NewsList/>
            </div>
        </div>)
    }
}

export default News