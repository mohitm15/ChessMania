import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";
import { Cursor } from "react-bootstrap-icons";

const CardFlipComponent = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function cardFlip() {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      cardStyles={{ height: "130%" }}
    >
      <div className="frontCard">
        <span style={{ fontSize: "225%" }}>{props.gameName}</span>
        <br /> <span style={{ fontSize: "120%" }}>RATING</span>
        <br />
        <div style={{ padding: "5%" }}>
          <Button variant="outline-secondary" onClick={cardFlip}>
            <Cursor color="white" />
          </Button>
        </div>
      </div>

      <div
        className="backCard"
        style={{ paddingTop: "15%", paddingBottom: "15%" }}
      >
        <span style={{ fontSize: "330%" }}>{props.gameRating}</span>
        <br />
        <Button variant="outline-secondary" onClick={cardFlip}>
          Back
        </Button>
      </div>
    </ReactCardFlip>
  );
};

export default CardFlipComponent;
