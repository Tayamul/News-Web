import React, {useState} from 'react'
import {SlLike} from 'react-icons/sl'
import * as api from '../utils/api'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import './incrementArticleVote.css'

const IncrementArticleVote = ({votes, article_id}) => {

    const [articleVotesIncrement, setArticleVotesIncrement] = useState(0);
    const [error, setError] = useState(null)

    const incVote = (article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        api.patchArticlesById(article_id).catch((err) => {
            setError('System broken')
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        })
    }

    const decVote = (article_id) => {
        setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        api.patchArticlesById(article_id).catch((err) => {
            setError('System broken')
            setArticleVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        })
    }
    if(error) return error;

    return (
    <section>
        <p className='articles-votes'>votes: {votes + articleVotesIncrement}</p>
        <ThumbDownOffAltOutlinedIcon className='dislike-button' onClick={() => {decVote(article_id)}}/>
        <ThumbUpOutlinedIcon className='like-button' onClick={() => {incVote(article_id)}}/>
    </section>
    )
}






export default IncrementArticleVote
// const IncrementVote = ({comments, commentId}) => {
//     const [votesChange, setVotesChange] = useState(0);

//     const incVote = (commentId) => {
//         setVotesChange((currVotesChange) => currVotesChange + 1);

//     }

//   return (
//     <div>
//         {comments.filter((comment) => {
//             console.log(comment.comment_id, "COO")
//             return <p>{comment.votes}</p>
//         })}
       
//     </div>
//   )
// }

// {<SlLike className='like-btn' onClick={() => {incVote(commentId)}}/>} 