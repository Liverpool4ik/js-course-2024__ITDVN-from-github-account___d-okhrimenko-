let htmlInput = document.querySelector("#contact-list");
let template = document.querySelector("#template").innerHTML;
contactList.renderWithTemplate(contactBook.contacts, htmlInput, template);
