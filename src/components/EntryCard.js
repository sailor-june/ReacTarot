import React from 'react'
import { Link } from 'react-router-dom'
function EntryCard(props) {
  const cards = {...props.entry.cards}
  console.log(cards)
  return (
    <div className='entry'>
        
        <Link to={`/diary/${props.entry._id}`} data={props.entry}>
             <li>{cards[0].number} of {cards[0].suit}</li>
                  </Link>
        </div>
  )
}

export default EntryCard