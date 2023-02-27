import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import EntryCard from '../components/EntryCard'
import Signup from './Signup';





function Diary(props) {
  const library={...props.library.cards}
  const entries= props.entries || []
  




  const loaded = () => {
    if (entries && entries.length > 0) {
      return entries.map((entry) => (
        <EntryCard
          key={entry._id}
          entry={entry}
          img={props.library.cards.find((card) => card.name === entry.cards[0]).img}
        />
      ));
    } else {
      return (
        <>
          <h2>No entries found</h2>
          {props.user && <Link to="/draw">Create new entry</Link>}
        </>
      );
    }
  };
  const loading = () => {
    if (!props.user){
      return(
        <Signup />
      )
    }
    return <h1>Loading...</h1>;
  };

  return (
    <div className='container'>
      {entries ? loaded() : loading()}
    </div>
  )
}

export default Diary
