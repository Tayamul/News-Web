import React, {useState} from 'react'
import {SlLike} from 'react-icons/sl'
import * as api from '../utils/api'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import './incrementVote.css'

const IncrementVote = ({votes, comment_id}) => {

    const [votesIncrement, setVotesIncrement] = useState(0);
    const [error, setError] = useState(null)

    const incVote = (comment_id) => {
        setVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        api.patchComments(comment_id).catch((err) => {
            setError('System broken')
            setVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        })
    }

    const decVote = (comment_id) => {
        setVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        api.patchComments(comment_id).catch((err) => {
            setError('System broken')
            setVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        })
    }
    if(error) return error;

    return (
    <section>
        <p className='comments-votes'>votes: {votes + votesIncrement}</p>
        <ThumbDownOffAltOutlinedIcon className='dislike-btn' onClick={() => {decVote(comment_id)}}/>
        <ThumbUpOutlinedIcon className='like-btn' onClick={() => {incVote(comment_id)}}/>
    </section>
    )
}






export default IncrementVote
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