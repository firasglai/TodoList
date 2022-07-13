import './App.css';
import Header from './Components/Header';
import Createarea from './Components/Createarea';
import { useState } from 'react';
import Notes from './Components/Notes';
import Footer from './Components/Footer';


function App() {
  const[notes,setnotes]=useState([]);
function addnote(newNote){
 setnotes(prevnotes=> {
  return [...prevnotes,newNote];
 });
}

function Deletenote(id){
setnotes(prevnotes=>{
  return prevnotes.filter((noteitem,index)=>{
return index!==id
  });
})
}
  return (
    <div className="App">
   <Header  />
   <Createarea Add={addnote}/>
  {notes.map((noteitem,index)=>{
return (
<Notes 
key={index}
id={index}
title={noteitem.title}
content={noteitem.content}
onDelete={Deletenote}
/>  
)
  })}
  <Footer />
    </div>
  );
}

export default App;
