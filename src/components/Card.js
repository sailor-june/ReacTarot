import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Card(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      
      {/* <CSSTransition
      in={isShown}
      timeout={300} */}
      {/* </div>classNames="slide-card"> */}
      <img src={`http://localhost:4000/cards/${props.card.img}`} />
      {/* </CSSTransition>*/}
      <TransitionGroup> 
        {isShown && (
          <CSSTransition
            in={isShown}
            timeout={500}
            classNames="fade-questions"
          >
            <div className="questions">
              {
                props.card.questions[
                  Math.floor(Math.random() * props.card.questions.length)
                ]
              }
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Card;

