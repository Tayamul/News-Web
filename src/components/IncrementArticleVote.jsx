import React, {useState} from 'react'
import * as api from '../utils/api'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import './incrementArticleVote.css'

const IncrementArticleVote = ({votes, article_id}) => {

    const [articleVotesIncrement, setArticleVotesIncrement] = useState(0);
    const [error, setError] = useState(null)

    const incVote = (article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        api.patchArticlesById(article_id, 1).catch((err) => {
            setError("Something's gone worng, please try again")
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        })
    }

    const decVote = (article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        api.patchArticlesById(article_id, -1).catch((err) => {
            setError("Something's gone worng, please try again")
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        })
    }
    
    if(error) return error;

    return (
    <section>
        <p className='articles-votes'>{votes + articleVotesIncrement} votes</p>
        <ThumbDownOffAltOutlinedIcon className='dislike-button' onClick={() => {decVote(article_id)}}/>
        <ThumbUpOutlinedIcon className='like-button' onClick={() => {incVote(article_id)}}/>
    </section>
    )
}

export default IncrementArticleVote
 