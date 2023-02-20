import Container from "../components/Container";
import { useState } from "react";
import Library from "../tarot-images";
import { json, Link } from "react-router-dom";
import React from "react";

function Reading(props) {
  const [deck, setDeck] = useState(props.library.cards);


  const [cards, setCards] = useState([]);
  


  
  
  
  
  
  
  
  function draw() {
    const RANDINT = Math.floor(Math.random() * deck.length);
    let choice = deck[RANDINT];

    //add card to reading
    setCards((prevState) => {
      return [...prevState, { ...choice }];
    });


    // add class to trigger animation for newest card


  // remove class after animation is complete
  

  
    ///////////////remove chosen card from deck
    setDeck((deck) => {
      let newDeck = deck.filter((card) => card !== choice);
      return [...newDeck];
    });
  }
const URL="http://localhost:4000"

//////POST ENTRY
const createItem= async(reading)=>{
  if(!props.user) return;
  
  const token = await props.user.getIdToken()
  console.log(await fetch(URL +'/diary' ,{ 
      method: 'POST',
      headers: {
      'Content-type': "application/json",
      'Authorization' :'Bearer '+token },
      body: JSON.stringify(
            {uid: '',
              cards : cards}

      )
  }
  ))}
  return (
    <>
      <div className="navbox">
        <button onClick={createItem}>save this reading</button>
      </div>
      <div className="deck" onClick={draw} />
      <Container cards={cards} />
    </>
  );
}
export default Reading;
