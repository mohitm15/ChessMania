import React from 'react';
import { Row,Col,Alert } from 'react-bootstrap';

const IntroductionComponent = (props) => {
    return (
        <Alert variant={'secondary'}>
        <Row>
            <Col className="fullName">{props.fName?.slice(1,-1)}  {props.lName?.slice(1,-1)}</Col>
            <Col className="totalGame">{props.totalGames} : <span style={{color:'green'}}>{props.totalWins} </span> / <span style={{color:'blue'}}>{props.totalDraws} </span> / <span style={{color:'red'}}>{props.totalLoss}</span></Col>
        </Row>
    </Alert>
    );
};

export default IntroductionComponent;