import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as api from '../utils/api'
import './comments.css'

const Comments = ({comments, setComments}) => {

    const {article_id} = useParams();

    useEffect(()=> {
        api.getArticlesCommentsById(article_id)
        .then(data => {
            setComments(data.comments);
        })
    }, [])

  return (
    <section className='container comments__container'>
        <ul className='comments-box'>
        <h5>Comments:</h5>
            {comments.map((comment) => {
                return <li key={comment.comment_id} className='comments-list'>
                    {/* need an author's image here */}
                    
                    <h6>{comment.author}</h6>
                    <p className='comments-body'>{comment.body}</p>
                    <h6>Date posted:{comment.created_at.split("T")[0]}</h6>
                    <h6>votes: {comment.votes}</h6>
                </li>
            })}
        </ul>
    </section>
  )
}

export default Comments