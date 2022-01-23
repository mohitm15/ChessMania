import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import {
  PersonCheckFill,
  PeopleFill,
  BarChartFill,
  CircleFill,
} from "react-bootstrap-icons";
// import ToastStatusComponent from "./toastStatus";

const TitleHeadComponent = (props) => {
  return (
    <Alert variant={"success"}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "85px",
            padding: "auto",
            margin: "auto",
          }}
        >
          <Col className="userName">
            <div className="d-flex justify-evenly">
              <span style={{ marginRight: "15%" }}>
                <img
                  src={props.srcOfFlag}
                  alt="country_flag"
                  style={{ height: "60px", width:"110px" }}
                />
              </span>
              <span>{props.username?.slice(1, -1)}</span>
            </div>
          </Col>
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
            <b>Online: {props.isOnline}</b>{" "}
            <CircleFill size={16} color={props.isOnline ? "green" : "red"} />
          </Col>
        </Row>
      </div>
    </Alert>
  );
};

export default TitleHeadComponent;
