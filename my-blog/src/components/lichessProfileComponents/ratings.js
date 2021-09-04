import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import CardFlipComponent from "./CardFlip";

const RatingsComponent = (props) => {
  return (
    <>
      <Alert variant={"success"}>
        <Row>
          <Col className="fullName">Ratings</Col>
          <Col className="totalGame">
            {" "}
            <span> {props.bulletRating} </span> |{" "}
            <span>{props.blitzRating} </span> | <span>{props.rapidRating}</span>
          </Col>
        </Row>
      </Alert>
      <Alert variant={"dark"}>
        <div className="d-flex bd-highlight example-parent">
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Bullet"
              gameRating={props.bulletRating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Blitz"
              gameRating={props.blitzRating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Rapid"
              gameRating={props.rapidRating}
            />
          </div>
        </div>
        <div className="d-flex bd-highlight example-parent">
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Classical"
              gameRating={props.classicalRating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Chess960"
              gameRating={props.chess960Rating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="AntiChess"
              gameRating={props.antichessRating}
            />
          </div>
        </div>
        <div className="d-flex bd-highlight example-parent">
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="3Check"
              gameRating={props.checkRating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Atomic"
              gameRating={props.atomicRating}
            />
          </div>
          <div className="p-2 flex-fill bd-highlight col-example">
            <CardFlipComponent
              gameName="Horde"
              gameRating={props.hordeRating}
            />
          </div>
        </div>
      </Alert>
    </>
  );
};

export default RatingsComponent;
