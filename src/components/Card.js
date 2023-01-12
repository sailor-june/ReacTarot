import React from 'react'

function Card({ card  }) {
  return (
    <div className='card'> {card.name} </div>
  )
}

export default Card