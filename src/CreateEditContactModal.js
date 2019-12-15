import React from "react";
import {
	Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col,
} from 'reactstrap';


const CreateEditContactModal = ({toggle, isOpen}) => {
	
	return (
		<div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Contact</ModalHeader>
        <ModalBody>
          <Form>
	          <Row form>
	        		<Col md={6}>
		          	<FormGroup>
					        <Label for="firstName">First Name</Label>
					        <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="phoneNo">Last Name</Label>
					        <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
					      </FormGroup>
					    </Col>
					  </Row>
					  <Row form>
	        		<Col md={6}>
					      <FormGroup>
					        <Label for="email">Email</Label>
					        <Input type="email" name="email" id="email" placeholder="Email" />
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="phoneNo">Password</Label>
					        <Input type="text" name="phone" id="phoneNo" placeholder="Phone Number" />
					      </FormGroup>
					    </Col>
					  </Row>
			    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
	);
}

export default CreateEditContactModal;