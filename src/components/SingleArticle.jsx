import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import * as api from '../utils/api'
import './singleArticle.css'
import {format} from 'date-fns'

const SingleArticle = () => {

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  const {article_id} = useParams();

  useEffect(() => {
    setIsLoading(true)
    api.getArticlesById(article_id).then((data) => {
      setArticle(data.article)
      setIsLoading(false);
    })
  }, [])

  if(isLoading) return <p>Loading...</p>

  return (
    <section className='container singleArticle__container'>
        <div className='singleArticle-box'>
          <h5 className='singleArticle-topic'>{article.topic.charAt(0).toUpperCase() + article.topic.slice(1)}</h5>
          <h3 className='singleArticle-title'>{article.title}</h3>
          <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='cover pic for now' />
          <h6 className='singleArticle-author'>By {article.author} at {article.created_at.split("T")[0]}</h6>
          <p className='singleArticle-body'>{article.body}</p>
        </div>
   
    </section>
  )
}

export default SingleArticle