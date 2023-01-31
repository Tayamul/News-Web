import React, {useState} from 'react'
import * as api from '../utils/api'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import {IconButton} from '@mui/material'
import './incrementArticleVote.css'

const IncrementArticleVote = ({votes, article_id}) => {

    const [articleVotesIncrement, setArticleVotesIncrement] = useState(0);
    const [error, setError] = useState(null)

    const incVote = (e, article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        api.patchArticlesById(article_id, 1).catch((err) => {
            setError("Something's gone worng, please try again")
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        })
    }

    const decVote = (e, article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        api.patchArticlesById(article_id, -1).catch((err) => {
            setError("Something's gone worng, please try again")
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        })
    }
    
    if(error) return error;

    return (
    <section id='articlevote-container'>
        <IconButton color='error' onClick={(e) => {decVote(e, article_id)}}><ThumbDownOffAltOutlinedIcon/></IconButton>
        <IconButton color='success' onClick={(e) => {incVote(e, article_id)}}><ThumbUpOutlinedIcon /></IconButton>
        <p className='articles-votes'>{votes + articleVotesIncrement}</p>
    </section>
    )
}

export default IncrementArticleVote
 