import React, {useState} from "react";
import {
	Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col,
} from 'reactstrap';
import ContactUtil from './ContactUtil';


const CreateEditContactModal = ({toggle, isOpen, contactData}) => {
	const [firstName, changeFirstName] = useState((contactData && contactData.firstName) || '');
	const [lastName, changeLastName]   = useState((contactData && contactData.lastName) || '');
	const [email, changeEmail]         = useState((contactData && contactData.email) || '');
	const [phone, changePhone]         = useState((contactData && contactData.phoneNo) || '');

	const showCreateBtn = ContactUtil.showCreateBtn(firstName, lastName, email, phone);
	console.log(showCreateBtn);
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
					        <Input
					        	type="text"
					        	name="firstName"
					        	id="firstName"
					         	placeholder="First Name"
					         	value={firstName}
					         	onChange={e => changeFirstName(e.target.value)}
					        />
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="phoneNo">Last Name</Label>
					        <Input
					        	type="text"
					        	name="lastName"
					        	id="lastName"
					        	placeholder="Last Name"
					        	value={lastName}
					         	onChange={e => changeLastName(e.target.value)}
					        />
					      </FormGroup>
					    </Col>
					  </Row>
					  <Row form>
	        		<Col md={6}>
					      <FormGroup>
					        <Label for="email">Email</Label>
					        <Input
					        	type="email"
					        	name="email"
					        	id="email"
					        	placeholder="Email"
					        	value={email}
					         	onChange={e => changeEmail(e.target.value)}
					        />
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="phoneNo">Password</Label>
					        <Input
					        	type="text"
					        	name="phone"
					        	id="phoneNo"
					        	placeholder="Phone Number"
					        	value={phone}
					         	onChange={e => changePhone(e.target.value)}
					        />
					      </FormGroup>
					    </Col>
					  </Row>
			    </Form>
        </ModalBody>
        <ModalFooter>
          <Button
          	color="primary"
          	onClick={toggle}
          	disabled={!showCreateBtn}
          >
          	Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
	);
}

export default CreateEditContactModal;