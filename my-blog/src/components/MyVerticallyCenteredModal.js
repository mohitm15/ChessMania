import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function MyVerticallyCenteredModal({
  modalInputComment,
  handleCommentChange,
  handleCloseModal,
  updateComment,
  ...props
}) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <h3>Update Comment Here</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="mb-3">
            <label className="col-form-label">Comment:</label>
            <textarea
              className="form-control"
              id="comment-text"
              value={modalInputComment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={updateComment}>Update</Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
