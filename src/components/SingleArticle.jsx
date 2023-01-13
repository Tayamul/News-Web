import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import * as api from '../utils/api'
import './singleArticle.css'
import Comments from './Comments'
import CommentAdder from './CommentAdder'
import dayjs from 'dayjs'

const SingleArticle = () => {

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [renderKey, setRenderKey] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const {article_id} = useParams();

  useEffect(() => {
    setIsLoading(true)
    api.getArticlesById(article_id).then((data) => {
      setArticle(data.article)
      setIsLoading(false);
    })
  }, [article_id])

  if(isLoading) return <p>Loading...</p>

  return (
    <section className='container singleArticle__container'>
        <div className='singleArticle-box'>
          <h4 className='singleArticle-topic'>{article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</h4>
          <h2 className='singleArticle-title'>{article.title}</h2>
          <img src={`https://source.unsplash.com/random?${article.title}`} alt={article.title} />
          <h6 className='singleArticle-author'>By {article.author} at {new dayjs(article.created_at).format("D MMM YYYY")}</h6>
          <p className='singleArticle-body'>{article.body}</p>
        </div>
        <Comments comments={comments} setComments={setComments} renderKey={renderKey} setRenderKey={setRenderKey}/>
        <CommentAdder article_id={article.article_id} setComments={setComments}/>
    </section>
  )
}

export default SingleArticle