import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as api from '../utils/api'
import './comments.css'
import IncrementVote from './IncrementVote'
import dayjs from 'dayjs'

const Comments = ({comments, setComments}) => {

    const [isLoading, setIsLoading] = useState(true);
    const {article_id} = useParams();
    
    useEffect(()=> {
        setIsLoading(true)
        api.getArticlesCommentsById(article_id)
        .then(data => {
            setComments(data.comments);
            setIsLoading(false)
        })
    }, [])
    

    if(isLoading) return <p>Loading...</p>
    if(comments.length === 0) return <p>No comments to display</p>


  return (
    <section className='container comments__container'>
        <ul className='comments-box'>
        <h5>Comments</h5>
            {comments.map((comment) => {
                return <li key={comment.comment_id} className='comments-list'>
                    {/* need an author's image here */}
                    
                    <h6>{comment.author}</h6>
                    <p className='comments-body'>{comment.body}</p>
                    <h6>Date posted: {new dayjs(comment.created_at).format("D MMM YYYY")}</h6>
                    <IncrementVote votes={comment.votes} comment_id={comment.comment_id}/>
                </li>
            })}
            
        </ul>
    </section>
  )
}

export default Comments