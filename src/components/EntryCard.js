import React from 'react'
import { Link } from 'react-router-dom'
function EntryCard(props) {

  
  console.log(props.entry)
  return (<Link to={`/diary/${props.entry._id}`} >
    <div className='entrycard'>
        
        
        <img src={`https://fortune-diary.herokuapp.com/cards/${props.img}`} alt={props.entry.created_at} />
                  
        {props.entry.created_at}
        </div></Link>
  )
}

export default EntryCard