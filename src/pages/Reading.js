import Container from "../components/Container";
import { useState } from "react";

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


    ///////////////remove chosen card from deck
    setDeck((deck) => {
      let newDeck = deck.filter((card) => card !== choice);
      return [...newDeck];
    });
  }
  const URL = "http://fortune-diary.herokuapp.com";

  //////POST ENTRY
  const createItem = async (reading) => {
    if (!props.user) return;

    const token = await props.user.getIdToken();
    await fetch(URL + "/diary", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ cards: cards }),
    }).then(() => {
      window.location.replace("/diary");
    });
  };
  return (
    <><div className="Upper">
      <div className="navbox">
        <button onClick={createItem}>save this reading</button>
        
      </div>
      </div>
      <div className="deck" onClick={draw} />
      <Container cards={cards} />
    </>
  );
}
export default Reading;
