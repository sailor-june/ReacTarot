import "./App.css";
import Container from "./components/Container";
import Deck from "./components/Deck";
import { useState } from "react";
import Library from "./tarot-images";

function App() {
  const [deck, setDeck] = useState(Library.cards);
  const [cards, setCards] = useState([]);

  const RANDINT = Math.floor(Math.random() * deck.length);

  function drawCard(e) {
    let choice = deck[RANDINT];

    setCards((cards) => {
      return [...cards, { ...choice }];
    });
    setDeck((deck) => {
      let newDeck = deck.filter((card) => card !== choice);
      return [...newDeck];
    });
  }

  function handleClick() {
    drawCard(deck);
  }

  return (
    <div className="App">
      <div className="deck" onClick={handleClick}>
        {deck.length} cards remaining
      </div>
      <Container cards={cards} />
    </div>
  );
}

export default App;
