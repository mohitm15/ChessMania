import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import LichessProfileComponent from "../components/lichessProfile";

const LichessProfilePage = () => {
  useEffect(() => {
    document.title = "ChessMania - LiPRO";
  }, []);

  return (
    <>
      <div>
        <Jumbotron>
          <h1>Search Any Lichess Profile here ...</h1>
        </Jumbotron>

        <div>
          <LichessProfileComponent />
        </div>
      </div>
    </>
  );
};

export default LichessProfilePage;
