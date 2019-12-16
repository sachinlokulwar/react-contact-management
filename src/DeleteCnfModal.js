import React, {useState} from "react";
import {
	Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const DeleteCnfModal = ({toggle, isOpen, deleteContact}) => {
	return (
		<div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Contact</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this contact ? </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
          <Button
          	color="danger"
          	onClick={deleteContact}
          >
          	Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
	);
}

export default DeleteCnfModal;