import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-h06n.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get(`/articles`).then((response) => {
    console.log(response, "API")
    return response.data;
  });
};

export const getArticlesByQuery = (topic) => {
  return newsApi.get(`/articles`, {
    params: {topic: topic},
  }).then((response) => {
    return response.data;
  });
};

export const getArticlesById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
};

export const getArticlesCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data;
  });
};

export const patchComments = (comment_id, increment) => {
  return newsApi
    .patch(`/comments/${comment_id}`, {
      inc_votes: increment,
    })
    .then((response) => {
      return response.data;
    });
};

export const patchArticlesById = (article_id, increment) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: increment,
    })
    .then((response) => {
      return response.data;
    });
};

export const postComments = (article_id, newComment) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    username: "grumpy19",
    body: newComment
  })
  .then((response) => {
    return response.data.comment
  })
}