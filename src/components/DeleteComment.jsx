import React, {useState} from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import * as api from '../utils/api'
import './comments.css'

const DeleteComment = ({comment_id, setComments, renderKey, setRenderKey}) => {

  const [isDeleted, setIsDeleted] = useState(false)
  const [isError, setIsError] = useState(null)

    const handleClick = (comment_id) => {
      setIsDeleted(true)
      setComments((currComments) => currComments)
      api.deleteComments(comment_id).then(() => {
        setRenderKey(!renderKey);
        setIsDeleted(false)
      })
      .catch((err) => {
        setIsError("Something's gone wrong, please try again")
      })
    }

    if(isDeleted) return <p id='deleting-btn'>Deleting...</p>
    if(isError) return isError;

  return (
    <><DeleteOutlineOutlinedIcon color='error' onClick={() => handleClick(comment_id)}/></>
  )
}

export default DeleteComment