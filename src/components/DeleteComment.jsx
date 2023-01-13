import React, {useState} from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import * as api from '../utils/api'
import './comments.css'

const DeleteComment = ({comment_id, renderKey, setRenderKey}) => {

  const [isDeleted, setIsDeleted] = useState(false)
    const handleClick = (comment_id) => {
      setIsDeleted(true)
      api.deleteComments(comment_id).then(() => {
        setRenderKey(!renderKey);
        setIsDeleted(false)
      })
    }

    if(isDeleted) return <p id='deleting-btn'>Deleting...</p>

  return (
    <><DeleteOutlineOutlinedIcon color='error' onClick={() => handleClick(comment_id)}/></>
  )
}

export default DeleteComment