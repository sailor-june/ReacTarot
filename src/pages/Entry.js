
import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function Entry(props) {
  const { id } = useParams();
  const entry = props.entries.find((entry) => entry._id === id);

  if (!entry) {
    return <div>Loading...</div>;
  }

  const cardList = entry.cards.map((card) => (
    <Card key={card} card={props.library.cards.find((item) => item.name === card)} />
  ));

  return <div>{cardList}</div>;
}

export default Entry;

