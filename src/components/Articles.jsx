import React, { useEffect, useState } from 'react'
import * as api from '../utils/api'
import './articles.css'
import {Link} from 'react-router-dom'
import { Bars } from 'react-loading-icons'
import IncrementArticleVote from './IncrementArticleVote'

const Articles = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    api.getArticles().then((data) => {
      setArticles(data.articles);
      setIsLoading(false);
    })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
      <main className='articles__container'>
        <ul className='articles-box'>
          {articles.map((article) => {
            return <li key={article.article_id} className='articles-list'>
              <Link to={`/articles/${article.article_id}`}><img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='random image for now'/>
              <h3 className='articles-title'>{article.title}</h3>
              <h6 className='articles-author'>Author: {article.author}</h6>
              <h5 className='articles-topic'>Topic: {article.topic}</h5></Link>
              <IncrementArticleVote votes={article.votes} article_id={article.article_id}/>
            </li>
          })}
        </ul>
    </main>
  )
}

export default Articles


  
