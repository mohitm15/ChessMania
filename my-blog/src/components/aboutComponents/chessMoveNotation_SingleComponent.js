import React from "react";
import { Accordion, Card, Row, Col } from "react-bootstrap";
import { HandIndex } from "react-bootstrap-icons";

const ChessMoveNotationSingleComp = (props) => {
  let {
    h1bgColor,
    h1content,
    cardBorderColor,
    accColor,
    accBgcolor,
    accTitle,
    handiconColor,
    accBody,
  } = props;
  return (
    <>
      <Row key={h1bgColor} style={{ padding: "5%", textAlign: "center" }}>
        <Col className="col-2 mx-5">
          <span>
            <h1
              style={{
                fontWeight: "600",
                color: "white",
                backgroundColor: h1bgColor,
                borderRadius: "20%",
                padding: "2%",
              }}
            >
              {h1content}
            </h1>
          </span>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0">
            <Card style={{ border: `1px solid ${cardBorderColor} ` }}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                style={{
                  color: accColor,
                  fontWeight: "700",
                  fontFamily: "Special Elite",
                  backgroundColor: accBgcolor,
                }}
              >
                {accTitle}
                <span className="mx-2">
                  {" "}
                  <HandIndex color={handiconColor} size={25} />
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{accBody}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </>
  );
};

export default ChessMoveNotationSingleComp;
