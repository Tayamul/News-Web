import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://news-api-h06n.onrender.com/api'
})

export const getArticles = () => {
    return newsApi.get(`/articles`).then((response) => {
        return response.data})
}

