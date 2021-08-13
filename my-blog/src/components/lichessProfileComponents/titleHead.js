import React from 'react';
import { Row,Col,Alert } from 'react-bootstrap';

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
            <Col>{props.followers} <br/><b>Following</b></Col>
            <Col>{props.following} <br/><b>Followers</b></Col>
            <Col>{props.isOnline} <br/><b>Online : </b></Col>
        </Row>
    </Alert>
    );
};

export default TitleHeadComponent;