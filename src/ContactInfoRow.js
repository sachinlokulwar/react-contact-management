import React from "react";
import {Row, Col, Button} from "reactstrap";

const ContactInfoRow = ({contact, handleEditClick}) => {
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
					<i class="fas fa-pencil-alt"></i>
				</Button>
				<Button color="danger" title="Delete Contact"><i class="far fa-trash-alt"></i></Button>
			</td>
		</tr>
	)
}

export default ContactInfoRow;