import React, {useState} from "react";
import {
	Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row, Col,
} from 'reactstrap';
import ContactUtil from './ContactUtil';
import './App.css'


const CreateEditContactModal = ({toggle, isOpen, contactData, saveContact, editMode}) => {
	const [firstName, changeFirstName] = useState(ContactUtil.getFirstName(contactData));
	const [lastName, changeLastName]   = useState(ContactUtil.getLastName(contactData));
	const [email, changeEmail]         = useState(ContactUtil.getEmail(contactData));
	const [phone, changePhone]         = useState(ContactUtil.getPhoneNo(contactData));

	const showCreateBtn = ContactUtil.showCreateBtn(firstName, lastName, email, phone);
	const errors        = ContactUtil.validateData(firstName, lastName, email, phone);
	const isValid       = !Object.keys(errors).some(x => errors[x]);
	console.log(showCreateBtn);
	return (
		<div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>
        	{editMode ? "Update Contact" : "Create Contact" }
        </ModalHeader>
        <ModalBody>
          <Form>
	          <Row form>
	        		<Col md={6}>
		          	<FormGroup>
					        <Label for="firstName" className="mandate">First Name</Label>
					        <Input
					        	type="text"
					        	name="firstName"
					        	id="firstName"
					         	placeholder="First Name"
					         	value={firstName}
					         	onChange={e => changeFirstName(e.target.value)}
					        />
					        {errors.firstName &&
					        	<p className="error-msg">Please Enter valid First Name</p>
					      	}
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="lastName" className="mandate">Last Name</Label>
					        <Input
					        	type="text"
					        	name="lastName"
					        	id="lastName"
					        	placeholder="Last Name"
					        	value={lastName}
					         	onChange={e => changeLastName(e.target.value)}
					        />
					        {errors.lastName &&
					        	<p className="error-msg">Please Enter valid Last Name</p>
					      	}
					      </FormGroup>
					    </Col>
					  </Row>
					  <Row form>
	        		<Col md={6}>
					      <FormGroup>
					        <Label for="email" className="mandate">Email</Label>
					        <Input
					        	type="email"
					        	name="email"
					        	id="email"
					        	placeholder="Email"
					        	value={email}
					         	onChange={e => changeEmail(e.target.value)}
					        />
					        {errors.email &&
					        	<p className="error-msg">Please Enter valid Email</p>
					      	}
					      </FormGroup>
					    </Col>
					    <Col md={6}>
					      <FormGroup>
					        <Label for="phoneNo" className="mandate">Password</Label>
					        <Input
					        	type="text"
					        	name="phone"
					        	id="phoneNo"
					        	placeholder="Phone Number"
					        	value={phone}
					         	onChange={e => changePhone(e.target.value)}
					        />
					        {errors.phoneNo &&
					        	<p className="error-msg">Please Enter valid Phone Number</p>
					      	}
					      </FormGroup>
					    </Col>
					  </Row>
			    </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
          <Button
          	color="primary"
          	onClick={e => saveContact(firstName, lastName, email, phone)}
          	disabled={!(showCreateBtn && isValid)}
          >
          	{editMode ? "Update" : "Create" }
          </Button>
          
        </ModalFooter>
      </Modal>
    </div>
	);
}

export default CreateEditContactModal;