import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import LichessProfileComponent from '../components/lichessProfile';


const LichessProfilePage = () => {

    return(
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
    )

}


export default LichessProfilePage;