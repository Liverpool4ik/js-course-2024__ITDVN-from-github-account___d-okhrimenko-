// const { default: mustache, templateCache } = require("mustache");

const contactList = {
	render(contacts, element) {
		// firstName: "John",
		// lastName: "Doe",
		// phone: "+1-202-555-0101",
		// email: "john.doe@example.com",
		// description: "Software Engineer at Tech Corp.",

		contacts.forEach((contacts) => {
			let section = document.createElement("section");
			section.classList.add("contact");
			section.insertAdjacentHTML(
				"beforeend",
				`<h2>${contacts.firstName} ${contacts.lastName}</h2>`
			);
			section.insertAdjacentHTML("beforeend", `<p>${contacts.phone}</p>`);
			section.insertAdjacentHTML("beforeend", `<p>${contacts.email}</p>`);
			section.insertAdjacentHTML("beforeend", `<p>${contacts.description}</p>`);
			element.appendChild(section);
		});
	},

	renderWithTemplate(contacts, element, template) {
		let htmlInput = "";
		contacts.forEach((contact) => {
			htmlInput += Mustache.render(template, contact);
		});
		element.innerHTML = htmlInput;
	},
};
