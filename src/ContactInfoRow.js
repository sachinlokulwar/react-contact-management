import React from "react";
import {Row, Col, Button} from "reactstrap";
import ContactUtil from "./ContactUtil";

const ContactInfoRow = ({contact, handleEditClick, handleDeleteClick}) => {
	return (
		<tr key={ContactUtil.getId(contact)}>
			<td>{ContactUtil.getFirstName(contact)}</td>
			<td>{ContactUtil.getLastName(contact)}</td>
			<td>{ContactUtil.getEmail(contact)}</td>
			<td>{ContactUtil.getPhoneNo(contact)}</td>
			<td>
				<Button
					color="link"
					title="Edit Contact"
					onClick={e => handleEditClick(ContactUtil.getId(contact))}
				>
					<i className="fas fa-pencil-alt"></i>
				</Button>
				<Button
					color="danger"
					title="Delete Contact"
					onClick={e => handleDeleteClick(ContactUtil.getId(contact))}
				>
					<i className="far fa-trash-alt"></i>
				</Button>
			</td>
		</tr>
	)
}

export default ContactInfoRow;