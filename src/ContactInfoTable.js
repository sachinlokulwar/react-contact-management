import React from "react";
import {Table} from "reactstrap";
import ContactInfoRow from "./ContactInfoRow";

const ContactInfoTable = ({contactInfo}) => {
	return (
		<div className="contact-info-table-container">
			<Table className="contact-info-table table-bordered">
	      <thead>
	        <tr>
	          <th>First Name</th>
	          <th>Last Name</th>
	          <th>Email</th>
	          <th>Phone No</th>
	          <th>Action</th>
	        </tr>
	      </thead>
	      <tbody>
					{contactInfo && contactInfo.map(contact => {
						return (
							<ContactInfoRow contact={contact} />
						)
					})
					}
				</tbody>
			</Table>
		</div>
	);
}

export default ContactInfoTable;