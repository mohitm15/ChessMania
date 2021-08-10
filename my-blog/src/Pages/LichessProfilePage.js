import React from 'react';
import LichessProfileComponent from '../components/lichessProfile';


const LichessProfilePage = () => {

    return(
        <>
        <div className="container">
            <h1>Search Any Lichess Profile here ...</h1>
            <div>
                <LichessProfileComponent />
            </div>
        </div>
        </>
    )

}


export default LichessProfilePage;