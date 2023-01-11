import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://news-api-h06n.onrender.com/api'
})

export const getArticles = () => {
    return newsApi.get(`/articles`).then((response) => {
        return response.data})
}

export const getArticlesById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((response) => {
        return response.data;
    })
}

export const getArticlesCommentsById = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then(response => {
        return response.data;
    })
}