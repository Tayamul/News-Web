import React, {useState} from 'react'
import * as api from '../utils/api'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import './incrementVote.css'

const IncrementVote = ({votes, comment_id}) => {

    const [votesIncrement, setVotesIncrement] = useState(0);
    const [error, setError] = useState(null)

    const incVote = (comment_id) => {
        setVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        api.patchComments(comment_id, 1).catch((err) => {
            setError("Something's gone worng, please try again")
            setVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        })
    }

    const decVote = (comment_id) => {
        setVotesIncrement((currVotesIncrement) => currVotesIncrement - 1);
        api.patchComments(comment_id, -1).catch((err) => {
            setError("Something's gone worng, please try again")
            setVotesIncrement((currVotesIncrement) => currVotesIncrement + 1);
        })
    }
    
    if(error) return error;

    return (
    <section>
        <p className='comments-votes'>{votes + votesIncrement} votes</p>
        <ThumbDownOffAltOutlinedIcon className='dislike-btn' onClick={() => {decVote(comment_id)}}/>
        <ThumbUpOutlinedIcon className='like-btn' onClick={() => {incVote(comment_id)}}/>
    </section>
    )
}


export default IncrementVote
