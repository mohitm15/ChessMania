import React, { useEffect } from "react";
import LichessProfileComponent from "../components/lichessProfile";

const LichessProfilePage = () => {
  useEffect(() => {
    document.title = "ChessMania - LiPRO";
  }, []);

  return (
    <>
      <div>
        
          <h1 className='topheading'>Search Any Lichess Profile here ... </h1>

        <div>
          <LichessProfileComponent />
        </div>
      </div>
    </>
  );
};

export default LichessProfilePage;
