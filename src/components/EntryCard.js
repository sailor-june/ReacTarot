import React from 'react'
import { Link } from 'react-router-dom'
function EntryCard(props) {
  const cards = {...props.entry.cards}
  console.log(cards)
  return (
    <div className='entry'>
        
        <Link to={`/diary/${props.entry._id}`} data={props.entry}>
             <li></li>
                  </Link>
        </div>
  )
}

export default EntryCard