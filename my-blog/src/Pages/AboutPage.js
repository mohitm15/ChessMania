import React from 'react';

import WorldMapSection from '../components/aboutComponents/WorldMapSection';
import ChessSetup from '../assets/chees.png';
import ChessMoves from '../assets/chess-moves.png';
import Chess from '../assets/chess.jpg';
import '../App.css';
import PieceNotation from '../components/aboutComponents/pieceNotation';

const AboutPage = () => (
    <>
        <h1>About Chess</h1>
        <br />
        <hr />
        <h3>Introduction</h3>
        <div className="about-paragraph">
            <p>
                Chess is an abstract strategy game and involves no hidden information. It is played on a 
                square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each 
                player (one controlling the white pieces, the other controlling the black pieces) controls 
                sixteen pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. 
                The object of the game is to checkmate the opponent's king, whereby the king is under immediate 
                attack (in "check") and there is no way for it to escape. There are also several ways a game can 
                end in a draw.
            </p>
            <div className="chess-setup">
                <img className="chess-wallpaper" src={Chess} alt="Chess "/>
            </div>
        </div>
        <h3>Board Setup</h3>

        <div className="about-paragraph">
            <p>
                The pieces are set out as shown in the diagram and photo. Thus, on White's first rank, from left to right,
                the pieces are placed in the following order: rook, knight, bishop, queen, king, bishop, knight, rook. On 
                the second rank is placed a row of eight pawns. Black's position mirrors White's, with an equivalent piece
                on the same file. The board is placed with a light square at the right-hand corner nearest to each player. 
                <div  className="chess-setup">
                    <img src={ChessSetup} alt="Chess Setup"/>
                </div>
            </p>
        </div>
        <h3>Movement of pieces</h3>
        <div className="about-paragraph">
            <p>
                Each piece has its own way of moving. In the diagrams, the dots mark the squares to which the piece can move if
                there are no intervening piece(s) of either color (except the knight, which leaps over any intervening pieces). 
                <div className="chess-setup">
                    <img className="chess-moves" src={ChessMoves} alt="Chess Moves"/>
                </div>
            </p>
        </div>
        <div className='about-paragraph'>
            <PieceNotation />
        </div>
        <h3>Popularity of Chess</h3>
        <div className="about-paragraph">
            <p>
                Chess is very popular sport across the globe. The highest title a player can achive in chess is a title of <em>GrandMaster</em>.
                Following is the total GMs present currently in the world from different countries.
            </p>
            <WorldMapSection />
        </div>
    </>
);

export default AboutPage;