import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import kingPath from "../../assets/king.png";
import queenPath from "../../assets/queen.png";
import rookPath from "../../assets/rook.png";
import knightPath from "../../assets/knight.png";
import bishopPath from "../../assets/bishop.png";
import pawnPath from "../../assets/pawn.png";
import ChessMoveNotation from "./chessMoveNotation";

const PieceNotation = () => {
  const [symbol, setSymbol] = useState({
    name: " King ",
    notation: "K",
    value: "+100",
    imgpath: kingPath,
  });

  const piece = [
    { name: " King ", notation: "K", value: "+100", imgpath: kingPath },
    { name: "Queen", notation: "Q", value: "+9.0", imgpath: queenPath },
    { name: " Rook ", notation: "R", value: "+5.0", imgpath: rookPath },
    { name: "Knight", notation: "N", value: "+3.0", imgpath: knightPath },
    { name: "Bishop", notation: "B", value: "+3.0", imgpath: bishopPath },
    { name: "Pawn", notation: "a", value: "+1.0", imgpath: pawnPath },
  ];

  return (
    <>
      <div>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Piece-Notation</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={symbol.name}
                  menuvariant="dark"
                  style={{zIndex:1}}
                >
                  <NavDropdown.Item onSelect={() => setSymbol(piece[0])}>
                    King
                  </NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => setSymbol(piece[1])}>
                    Queen
                  </NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => setSymbol(piece[2])}>
                    Rook
                  </NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => setSymbol(piece[3])}>
                    Knight
                  </NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => setSymbol(piece[4])}>
                    Bishop
                  </NavDropdown.Item>
                  <NavDropdown.Item onSelect={() => setSymbol(piece[5])}>
                    Pawn
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{ border: "1px solid black" }} className="my-4">
          <Row style={{ padding: "5%", textAlign: "center" }}>
            <Col style={{ fontSize: "200%" , zIndex:-1}}>
              <Alert variant="dark">
                <img
                  style={{ height: "50%", width: "50%"}}
                  src={symbol.imgpath}
                  alt="piece symbol"
                />
                {symbol.name}
              </Alert>
            </Col>
            <Col style={{ fontSize: "510%" , zIndex:-1}}>
              <Alert variant="dark">{symbol.notation}</Alert>
            </Col>
            <Col style={{ fontSize: "510%" }}>
              <Alert variant="dark">{symbol.value}</Alert>
            </Col>
          </Row>
          <Row
            style={{ textAlign: "center", fontSize: "150%" }}
            className="my-3"
          >
            <Col>Icon</Col>
            <Col>Symbol</Col>
            <Col>Value</Col>
          </Row>
        </div>
        <ChessMoveNotation />
      </div>
    </>
  );
};

export default PieceNotation;
