import React from "react";
import { Row, Col, Alert, Badge } from "react-bootstrap";
import RatingCardComponent from "./RatingCard";

import racerImage from "../../assets/racer3.png";
import stormImage from "../../assets/storm3.png";

const PuzzleStatsComponent = (props) => {
  return (
    <>
      <Alert variant={"success"}>
        <Row>
          <Col className="fullName">Puzzle Stats</Col>
        </Row>
      </Alert>
      <Alert variant={"dark"}>
        <div>
          <Row>
            <Col>
              <RatingCardComponent
                image={racerImage}
                run={props.racerrun}
                score={props.racerscore}
              />
            </Col>
            <Col>
              <RatingCardComponent
                image={stormImage}
                run={props.stormrun}
                score={props.stormscore}
              />
            </Col>
          </Row>
          <Row>
            <div className="puzzleStreak">
              Puzzle Rating : &nbsp;
              <Badge bg="info">{props.puzzleRating}</Badge>
            </div>
          </Row>
        </div>
      </Alert>
    </>
  );
};

export default PuzzleStatsComponent;
