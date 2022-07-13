import React from 'react'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from"@material-ui/icons/Delete"

function Notes(props) {
    function handledelete(){
props.onDelete(props.id)
    }
  return (
    <div className='note'>
       <h1>{props.title}</h1> 
       <p>{props.content}</p> 
       <Fab  onClick={handledelete}  >
<DeleteIcon />
</Fab>
    </div>
  )
}

export default Notes