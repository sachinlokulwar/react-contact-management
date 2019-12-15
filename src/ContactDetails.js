import React, {Component} from "react";
import {Container, Button, Row, Col} from "reactstrap";

import ContactInfoTable from './ContactInfoTable';
import ContactUtil from './ContactUtil';
import CreateEditContactModal from './CreateEditContactModal';

class ContactDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactInfo            : ContactUtil.contactList,
			showCreateContactModal : false,
			editMode               : false,
		}
		this.toggleCreateContactModal = this.toggleCreateContactModal.bind(this);
		this.createContact            = this.createContact.bind(this)
	}

	toggleCreateContactModal() {
		this.setState({showCreateContactModal: !this.state.showCreateContactModal})
	}

	createContact() {

	}

	render() {
		return (
			<Container>
				<Row className="page-header">
					<Col className="col-6">
						<div style={{"text-align": "left"}}>
							<h3 className="pull-left">Contact Info</h3>
						</div>
					</Col>
					<Col className="col-6">
						<div style={{"text-align": "right"}}>
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
					/>
				</div>
				{this.state.showCreateContactModal &&
					<CreateEditContactModal
						editMode={this.state.editMode}
						contactData={this.state.contactData}
						isOpen={this.state.showCreateContactModal}
						toggle={this.toggleCreateContactModal}
					/>
				}
			</Container>
		)
	}
}

export default ContactDetails;