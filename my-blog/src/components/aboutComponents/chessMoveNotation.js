import React from "react";
import { BookHalf } from "react-bootstrap-icons";
import ChessMoveNotationSingleComp from "./chessMoveNotation_SingleComponent";

const ChessMoveNotation = () => {
  
  const chessMoveData = [
    {
      h1bgColor: "red",
      h1content: "??",
      cardBorderColor: "red",
      accColor: "red",
      accBgcolor: "#F7BCAC",
      accTitle: "Blunder",
      handiconColor: "red",
      accBody:
        'The double question mark "??" indicates a blunder, a bad mistake.Typical moves which receive double question marks are those that overlook a tactic that wins substantial material or overlook a checkmate.',
    },
    {
      h1bgColor: "orange",
      h1content: "?",
      cardBorderColor: "orange",
      accColor: "orange",
      accBgcolor: "#F9DB85",
      accTitle: "Mistake",
      handiconColor: "orange",
      accBody:
        'A single question mark "?" after a move indicates that the annotator thinks that the move is a poor one and that it should not have been played.Mistakes often lead to loss of tempo or material.',
    },
    {
      h1bgColor: "#FFD100",
      h1content: "?!",
      cardBorderColor: "#FFD100",
      accColor: "#FFD100",
      accBgcolor: "#F7EFB2",
      accTitle: "Dubious Move",
      handiconColor: "#FFD100",
      accBody:
        'This symbol is similar to the "!?" (below) but usually indicates that the annotator believes the move to be dubious,questionable but possibly having merits.',
    },
    {
      h1bgColor: "#B67C52",
      h1content: <BookHalf color="white" size={30} />,
      cardBorderColor: "#B67C52",
      accColor: "#B67C52",
      accBgcolor: "#E3C4AF",
      accTitle: "Book Move",
      handiconColor: "#B67C52",
      accBody:
        'The "Book move" is simple to explain. It is generally the various moves played to the start of games which shows the opening mentioned in any Chess Book like Ruy Lopez, Queens Gambit etc.',
    },
    {
      h1bgColor: "#67B41A",
      h1content: "!",
      cardBorderColor: "#67B41A",
      accColor: "#67B41A",
      accBgcolor: "#C7E7B5",
      accTitle: "Good Move",
      handiconColor: "#67B41A",
      accBody:
        'While question marks indicate bad moves, exclamation points ("!") indicate good moves — especially ones which are surprising or involve particular skill. The symbol may also be interpreted as "best move". Annotators are usually somewhat conservative with the use of this symbol.',
    },
    {
      h1bgColor: "green",
      h1content: "!?",
      cardBorderColor: "green",
      accColor: "green",
      accBgcolor: "#A1CF9C",
      accTitle: "Excellent Move",
      handiconColor: "green",
      accBody:
        'The "!?" is one of the more controversial symbols. Different books have slightly varying definitions. Among the definitions are "interesting, but perhaps not the best move", "move deserving attention", "enterprising move" and "risky move"',
    },
    {
      h1bgColor: "#00A492",
      h1content: "!!",
      cardBorderColor: "#00A492",
      accColor: "#00A492",
      accBgcolor: "#B9E6E1",
      accTitle: "Brilliant Move",
      handiconColor: "#00A492",
      accBody:
        'The double exclamation point ("!!") is used for very strong moves such as sound sacrifices of large amounts of material and counter-intuitive moves that prove very powerful.',
    },
  ];

  return (
    <div style={{ border: "1px solid black" }} className="my-4">
      <div
        className="my-3 mx-3"
        style={{ fontSize: "160%", fontFamily: "Special Elite" }}
      >
        Chess Moves Notation
      </div>

      {chessMoveData.map((item, key) => {
        return (
          <ChessMoveNotationSingleComp
            key={item.h1bgColor}
            h1bgColor={item.h1bgColor}
            h1content={item.h1content}
            cardBorderColor={item.cardBorderColor}
            accColor={item.accColor}
            accBgcolor={item.accBgcolor}
            accTitle={item.accTitle}
            handiconColor={item.handiconColor}
            accBody={item.accBody}
          />
        );
      })}
    </div>
  );
};

export default ChessMoveNotation;
