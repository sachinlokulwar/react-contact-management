import React, {Component} from "react";
import {Container, Button, Row, Col} from "reactstrap";

import ContactInfoTable from './ContactInfoTable';
import ContactUtil from './ContactUtil';
import CreateEditContactModal from './CreateEditContactModal';
import DeleteCnfModal from './DeleteCnfModal';

class ContactDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactInfo            : ContactUtil.contactList,
			showCreateContactModal : false,
			editMode               : false,
			contactData            : {},
			showDeleteCnfModal     : false,
		}
		this.toggleCreateContactModal = this.toggleCreateContactModal.bind(this);
		this.createContact            = this.createContact.bind(this);
		this.handleEditClick          = this.handleEditClick.bind(this);
		this.handleDeleteClick        = this.handleDeleteClick.bind(this);
		this.deleteContact            = this.deleteContact.bind(this);
		this.toggleDeleteCnfModal     = this.toggleDeleteCnfModal.bind(this);
	}

	toggleCreateContactModal() {
		this.setState({showCreateContactModal: !this.state.showCreateContactModal})
	}

	createContact(firstName, lastName, email, phone) {
		if(this.state.editMode) {
			const list = this.state.contactInfo;
			for(let i=0;i<list.length;i++) {
				if(list[i].id === this.state.contactData.id) {
					list[i].firstName = firstName
					list[i].lastName  = lastName
					list[i].email     = email
					list[i].phoneNo   = phone
				}
			}
			this.setState({
				contactInfo            : list,
				editMode               : false,
				contactData            : {},
				showCreateContactModal : false
			})
		} else {
			const createObj = {
				id        : this.state.contactInfo.length + 1,
				firstName : firstName,
				lastName  : lastName,
				email     : email,
				phoneNo   : phone
			}
			this.setState({
				contactInfo            : [...this.state.contactInfo, createObj],
				showCreateContactModal : false
			})
		}
		
	}

	handleEditClick(id) {
		this.setState({
			showCreateContactModal : true,
			editMode               : true,
			contactData            : this.state.contactInfo.find((contact) => contact.id === id)
		})
	}

	handleDeleteClick(id) {
		this.setState({
			showDeleteCnfModal  : true,
			selectedIdForDelete : id
		})
		
	}

	deleteContact() {
		const list = this.state.contactInfo.filter(contact => contact.id !== this.state.selectedIdForDelete);
		this.setState({
			contactInfo        : list,
			showDeleteCnfModal : false,
		})
	}

	toggleDeleteCnfModal() {
		this.setState({
			showDeleteCnfModal: !this.state.showDeleteCnfModal
		})
	}

	render() {
		return (
			<Container>
				<Row className="page-header">
					<Col className="col-6">
						<div style={{"textAlign": "left"}}>
							<h3 className="pull-left">Contact Info</h3>
						</div>
					</Col>
					<Col className="col-6">
						<div style={{"textAlign": "right"}}>
							<Button
								className="pull-right"
								color="primary"
								onClick={this.toggleCreateContactModal}
							>
								Create Contact
							</Button>
						</div>
					</Col>
				</Row>
				<div className="page-body">
					<ContactInfoTable
						contactInfo={this.state.contactInfo}
						handleEditClick={this.handleEditClick}
						handleDeleteClick={this.handleDeleteClick}
					/>
				</div>
				{this.state.showCreateContactModal &&
					<CreateEditContactModal
						editMode={this.state.editMode}
						contactData={this.state.editMode ? this.state.contactData : ContactUtil.emptyContactObject}
						isOpen={this.state.showCreateContactModal}
						toggle={this.toggleCreateContactModal}
						saveContact={this.createContact}
					/>
				}
				{this.state.showDeleteCnfModal &&
					<DeleteCnfModal
					  isOpen={this.state.showDeleteCnfModal}
					  toggle={this.toggleDeleteCnfModal}
					  deleteContact={this.deleteContact}
					/>
				}
			</Container>
		)
	}
}

export default ContactDetails;