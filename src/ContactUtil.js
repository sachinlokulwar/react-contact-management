export default {
	contactList: [
		{
			id: 1,
			firstName: "firstName",
			lastName: "lastName",
			email: "test@gmail.com",
			phoneNo: "9988776655" 
		},
		{
			id: 2,
			firstName: "firstName1",
			lastName: "lastName1",
			email: "test1@gmail.com",
			phoneNo: "9988776655" 
		},
	],
	emptyContactObject: {
		firstName: "",
		lastName: "",
		email: "",
		phoneNo: ""
	},

	showCreateBtn: function(firstName, lastName, email, phone) {
		if(!(firstName && lastName && email	&& phone)) return false;
		return true;
	}

}