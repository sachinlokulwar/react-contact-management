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
	},

	validateData: function(firstName, lastName, email, phone) {
		const errors = {}
		if(firstName && firstName !== "") {
			const isValid = !(/^[a-zA-Z]+$/).test(firstName);
			errors.firstName = firstName.length < 2 || isValid
		}
		if(lastName && lastName !== "") {
			const isValid = !(/^[a-zA-Z]+$/).test(lastName);
			errors.lastName = lastName.length < 2 || isValid
		}
		if(email && email !== "") {
			errors.email = !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
		}
		if(phone && phone !== "") {
			errors.phoneNo = !(/^\+?[0-9. ()-]{10,25}$/).test(phone);
		}
		return errors;
	}

}