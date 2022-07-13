import React from 'react'
const date = new Date();
function Footer() {
  return (
    <footer>
        <p>{date.getDay()}/{date.getDate()}/{date.getFullYear()}</p>
        <p> © Copyright FirasGlai  </p>
        
    </footer>
  )
}

export default Footer