import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import { Link45deg } from "react-bootstrap-icons";

const IntroductionComponent = (props) => {
  return (
    <Alert variant={"secondary"}>
      <Row>
        <Col className="fullName">
          {props.fName} {props.lName}{" "}
          <Link45deg size={24} color="blue" href={props.userLink} />{" "}
        </Col>
        <Col className="totalGame">
          {props.totalGames} :{" "}
          <span style={{ color: "green" }}>{props.totalWins} </span> /{" "}
          <span style={{ color: "blue" }}>{props.totalDraws} </span> /{" "}
          <span style={{ color: "red" }}>{props.totalLoss}</span>
        </Col>
      </Row>
    </Alert>
  );
};

export default IntroductionComponent;
