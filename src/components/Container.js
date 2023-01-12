import React from 'react'
import Card from './Card'
function Container({ cards }) {
  return (<div className='container'>
    {cards.map(card => {
        return <Card key={card.name} card={card} />
    })}
  </div>)
}

export default Container