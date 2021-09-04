import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link45deg } from "react-bootstrap-icons";
import puzzleImage from "../../assets/puzzle.png";

const RatingCardComponent = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={puzzleImage} />
      <Card.Img variant="bottom" src={props.image} />
      <Card.Body>
        <Card.Title>How to Play?</Card.Title>
        <Card.Text>
          Each correct move earns one point. The goal is to get as many points
          as you can within 90 seconds.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <b>Run</b> : {props.run}
        </ListGroupItem>
        <ListGroupItem>
          <b>Score</b> : {props.score}
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://lichess.org/page/racer">
          See Here <Link45deg size={23} />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default RatingCardComponent;
