import React, { useState, useEffect } from "react";

function Card(props) {
  const [isShown, setIsShown] = useState(false);
  const [isNewCard, setIsNewCard] = useState(false);

  useEffect(() => {
    setIsNewCard(true);
    setTimeout(() => {
      setIsNewCard(false);
    }, 1000);
  }, [props.index]);

  return (
    <div
      className={`card ${isShown ? "shown" : ""} ${
        isNewCard ? "new-card" : ""
      }`}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setIsShown(false);
        }, 1000)
      }
    >
      <img src={`https://fortune-diary.herokuapp.com/cards/${props.card.img}`} alt={`${props.card.name}`} />

      {isShown && (
        <div className="questions">
          {
            props.card.questions[
              Math.floor(Math.random() * props.card.questions.length)
            ]
          }
        </div>
      )}
    </div>
  );
}

export default Card;
