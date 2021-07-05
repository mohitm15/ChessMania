import React from 'react';
import ChessRankings from '../components/ChessRankings';
import '../App.css'

import ChessMeme from '../assets/chessmeme.jpg';

const HomePage = () => (
    <>
        <h1>Hello , Welcome to Chess Mania</h1>
        <br />
        <p className="about-paragraph">
            ChessMania is a website which gives latest update for the chess. Chess is 
            one of the most tactical game played across the globe. Here our main focus is 
            to present cthe various chess articles. However this website also covers the basics learning 
            objectives of chess as well as current chess rankings at the international level.
        </p>
        <p className="about-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="chess-setup">
            <img className="chess-wallpaper" src={ChessMeme} alt="Chess Meme"/>
        </div>
        <div style={{marginTop:"5%"}}>
            <h1 style={{padding:"3%"}}>Top 10 Current Chess Players</h1>
            <h4 style={{padding:"0% 3% 3% 3%"}}>Chess Rankings</h4>
            <ChessRankings />
        </div>
        
    </>
);

export default HomePage;