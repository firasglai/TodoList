import React , {useState}from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
function Createarea(props) {

    const[note , setnote]=useState({
        title :"",
        content :""
     })

   function handlechange(event){
    const {name,value}=event.target;
    setnote(prevnote => {
        return{
            ...prevnote,
            [name]:value
        }
    })
   }
   function submitnote(event){
props.Add(note);
setnote({
    title :"",
    content :""
});
event.preventDefault();
   }

  return (
    <div>

        <form className='create-note'>
            <input type="text"
             name="title" 
             placeholder='title' 
             value={note.title}
             onChange={handlechange}
  />

  <textarea 
  name='content'
  rows="3"
placeholder='Take a note here ...'
value={note.content}
onChange={handlechange}
  />

  <Fab   color="secondary"  onClick={submitnote}>
    <AddIcon  />
  </Fab>
        </form>
    </div>
  )
}

export default Createarea