import React, { useState } from "react";
import { Toast, Button } from "react-bootstrap";
import { CircleSquare, Check2All } from "react-bootstrap-icons";

const ToastStatusComponent = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        style={{ position: "relative" }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header style={{ textAlign: "right" }}>
          <Check2All size={28} color="green" />
          <span style={{ marginLeft: "40%", textAlign: "right" }}>
            {props.seenAt?.slice(4, 24)}
          </span>
        </Toast.Header>
        <Toast.Body style={{ color: "black" }}>
          {props.bioOfUser ? props.bioOfUser : "Bio not available"}
        </Toast.Body>
      </Toast>

      <Button variant="outline-success mx-2" onClick={() => setShow(true)}>
        <CircleSquare size={20} color="black" />
      </Button>
    </>
  );
};

export default ToastStatusComponent;
