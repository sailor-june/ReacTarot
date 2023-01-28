import Container from "../components/Container";
import { useState } from "react";
import Library from "../tarot-images";
import { json, Link } from "react-router-dom";
import React from "react";

function Reading(props) {
  const [deck, setDeck] = useState(props.library.cards);
  const [cards, setCards] = useState([]);

  const RANDINT = Math.floor(Math.random() * deck.length);
  function draw() {
    let choice = deck[RANDINT];

    //add card to reading
    setCards((prevState) => {
      return [...prevState, { ...choice }];
    });
    ///////////////remove chosen card from deck
    setDeck((deck) => {
      let newDeck = deck.filter((card) => card !== choice);
      return [...newDeck];
    });
  }


//////POST ENTRY
const handleSubmit= async(event)=>{
  event.preventDefault()
  
  if (props.user){
  const token = await props.user.getIdToken()
  await fetch("/diary",{ 
      method: 'POST',
      headers: {
      'Content-type': "application/json",
      'Authorization' :'Bearer '+token },
      body:JSON.stringify({
    
      })
  }
  )}}
  return (
    <>
      <div className="deck" onClick={draw} />
      <Container cards={cards} />
    </>
  );
}
export default Reading;
