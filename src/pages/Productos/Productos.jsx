import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paneles from '../../components/images/paneles.jpeg'
import { Button, Modal } from 'react-bootstrap';
import './Productos.css'


export default function Productos({ product }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="square-img-container">
        <img src={Paneles} className="square-img" alt={product} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product}</h5>
        <Button variant="primary" onClick={handleShowModal}>
          Ver detalles
        </Button>
        <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal" size="xl" >
          <Modal.Header closeButton>
            <Modal.Title>{product}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={Paneles} className="modal-img" alt={product} />
            <p>{product}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
