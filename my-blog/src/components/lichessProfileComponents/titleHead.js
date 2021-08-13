import React from 'react';
import { Row,Col,Alert } from 'react-bootstrap';
import {PersonCheckFill, PeopleFill, BarChartFill} from 'react-bootstrap-icons';

const TitleHeadComponent = (props) => {
    return (
        <Alert variant={'success'}>
        <Row>
            <Col></Col>
            <Col className='titleOfUser'>{props.titleOfUser?.slice(1,-1)}</Col>
        </Row>
        <Row>
            <Col><img src={props.srcOfFlag} alt="" /></Col>
            <Col className="userName">{props.username?.slice(1,-1)}</Col>
        </Row>
        <Row className="followerRow">
            <Col><PeopleFill size={26} color='black' /><br/><b>Following:{props.followers}</b></Col>
            <Col><PersonCheckFill size={26} color='black' /> <br/><b>Followers:{props.following}</b></Col>
            <Col><BarChartFill size={26} color='black' /><br/><b>Online:{props.isOnline} </b></Col>
        </Row>
    </Alert>
    );
};

export default TitleHeadComponent;