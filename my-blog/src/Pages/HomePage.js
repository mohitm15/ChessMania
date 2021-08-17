import React from 'react';
import ChessRankings from '../components/ChessRankings';
import GalleryComponent from '../components/Gallery';
import '../App.css'

import ChessMeme from '../assets/chessmeme.jpg';


const HomePage = () => (
    <>
        <h1>Hello , Welcome to Chess Mania</h1>
        <br />
        <hr />
        <p className="about-paragraph">
            ChessMania is a website that gives the latest update for chess. Chess is one of the most
            tactical games played across the globe. Here our main focus is to present the various chess
            articles. However, this website also covers the basics of learning objectives of chess as
            well as current chess rankings at the international level.
        </p>
        <p className="about-paragraph">
            Subsequently, we also cover the common FAQs related to chess, the notation, and the type of game
            played in chess. You also get a glimpse of various prestigious tournaments of chess played across
            the globe within a chess calendar and about the esteemed players taking part in it.
        </p>
        <p>
            The last section takes you through the profile of any Lichess Player that loves chess. The profile section 
            displays the basic introduction, including name, nationality, followers, and total games played. Later it shows
            the player's rating in each variant and the percentage of wins and losses. It also shows the chess variant 
            played by that user most and which are least. Finally, it shows the statistics of the player in the puzzle section.
        </p>
        <div className="chess-setup">
            <img className="chess-wallpaper" src={ChessMeme} alt="Chess Meme"/>
        </div>
        <div style={{marginTop:"5%"}}>
            <h1 style={{padding:"3%"}}>Top 10 Current Chess Players</h1>
            <h4 style={{padding:"0% 3% 3% 3%"}}>Chess Rankings</h4>
            <ChessRankings />
        </div>
        <div>
            <h1>Know The Players</h1>
            <GalleryComponent />
        </div>
        
    </>
);

export default HomePage;