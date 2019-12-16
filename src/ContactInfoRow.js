import React from "react";
import {Row, Col, Button} from "reactstrap";

const ContactInfoRow = ({contact, handleEditClick, handleDeleteClick}) => {
	return (
		<tr key={contact.id}>
			<td>{contact.firstName}</td>
			<td>{contact.lastName}</td>
			<td>{contact.email}</td>
			<td>{contact.phoneNo}</td>
			<td>
				<Button
					color="link"
					title="Edit Contact"
					onClick={e => handleEditClick(contact.id)}
				>
					<i className="fas fa-pencil-alt"></i>
				</Button>
				<Button
					color="danger"
					title="Delete Contact"
					onClick={e => handleDeleteClick(contact.id)}
				>
					<i className="far fa-trash-alt"></i>
				</Button>
			</td>
		</tr>
	)
}

export default ContactInfoRow;