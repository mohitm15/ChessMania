import React from "react";

function Alert(props) {
  return (
    <div
      className="alert alert-success alert-dismissible fade show "
      role="alert"
      style={{ marginTop: "3%" }}
    >
      <strong>{props.type}</strong> {props.message}
    </div>
  );
}

export default Alert;
