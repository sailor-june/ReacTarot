import React from 'react'
import Card from './Card'
function Container({ cards }) {
  return (
    cards.map(card => {
        return <Card key={card.name} card={card} />
    })
  )
}

export default Container