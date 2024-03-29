import React from "react";
import {Button} from "reactstrap";
import ContactUtil from "./ContactUtil";

const ContactInfoRow = ({contact, handleEditClick, handleDeleteClick}) => {
	return (
		<tr key={ContactUtil.getId(contact)}>
			<td>{ContactUtil.getFirstName(contact)}</td>
			<td>{ContactUtil.getLastName(contact)}</td>
			<td>{ContactUtil.getEmail(contact)}</td>
			<td>{ContactUtil.getPhoneNo(contact)}</td>
			<td>
				{ContactUtil.getStatus(contact) ?
					<span style={{color: "green"}}><i className="fas fa-check"></i> Active</span>
				:
					<span style={{color: "red"}}><i className="fas fa-times"></i> In Active</span>
				}
			</td>
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