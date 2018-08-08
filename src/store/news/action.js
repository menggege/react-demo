import * as news from './action-type'

export const getNews = () => {
    return {
        type: news.GETNEWS
    }
}

export const delNew = (_index) => {
    return {
        type: news.DELNEW,
        index: _index
    }
}