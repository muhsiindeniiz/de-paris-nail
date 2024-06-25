import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap components

const ImageViewerModal = ({ image, onDelete, onClose }) => {
  return (
    <Modal show={true} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{image.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image.url} className="img-fluid" alt={image.title} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => onDelete(image.id)}>
          Delete
        </Button>
        <button
          style={{
            background: "#666",
            color: "#fff"
          }}
          onClick={onClose}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageViewerModal;
