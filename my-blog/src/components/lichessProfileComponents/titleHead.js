import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import {
  PersonCheckFill,
  PeopleFill,
  BarChartFill,
  CircleFill,
} from "react-bootstrap-icons";
import ToastStatusComponent from "./toastStatus";

const TitleHeadComponent = (props) => {
  //let nowState = props.isOnline;

  function circleColor(isNow) {
    //console.log("moh = "+ props.isOnline)
    return <CircleFill size={16} color={isNow ? "green" : "red"} />;
  }

  return (
    <Alert variant={"success"}>
      <Row>
        <Col></Col>
        <Col className="titleOfUser">{props.titleOfUser?.slice(1, -1)}</Col>
      </Row>
      <Row>
        <Col>
          <img src={props.srcOfFlag} alt="country_flag" className="h-75 w-24" />
          <ToastStatusComponent
            bioOfUser={props.bioOfUser}
            seenAt={props.seenAt}
          />
        </Col>
        <Col className="userName">{props.username?.slice(1, -1)}</Col>
      </Row>
      <Row className="followerRow">
        <Col>
          <PeopleFill size={26} color="black" />
          <br />
          <b>Following:{props.followers}</b>
        </Col>
        <Col>
          <PersonCheckFill size={26} color="black" /> <br />
          <b>Followers:{props.following}</b>
        </Col>
        <Col>
          <BarChartFill size={26} color="black" />
          <br />
          <b>Online: {props.isOnline}</b> {circleColor(props.isOnline)}
        </Col>
        {/* if Online:true => <CircleFill color='green' />
            else if Online:false => <CircleFill color='red' /> */}
      </Row>
    </Alert>
  );
};

export default TitleHeadComponent;
