const htmlInput = document.querySelector("#contact-list");
const template = document.querySelector("#template").innerHTML;
const contactForm = document.querySelector("#contactForm")


function render(){
contactList.renderWithTemplate(contactBook.contacts, htmlInput, template);
}

const firstNameInput = document.querySelector('#firstNameInput')
const lastNameInput = document.querySelector('#lastNameInput')
const phoneInput = document.querySelector('#phoneInput')
const emailInput = document.querySelector('#emailInput')
const descriptionInput = document.querySelector('#descriptionInput')

contactForm.addEventListener("submit", function (event) {
   event.preventDefault();

   let contact = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      description: descriptionInput.value
   
}
if(editId == null){
   contactBook.add(contact)
}
else {
   contactBook.update(editId, contact)
   editId == null;}
   render();
});


function remove(id){
contactBook.remove(id)
render()}


function edit(id){

   const contact = contactBook.find(id);
      editId = contact.id
         firstNameInput.value = contact.firstName;
         lastNameInput.value = contact.lastName;
         emailInput.value = contact.email;
         phoneInput.value = contact.phone;
         descriptionInput.value = contact.description;
render();
}

render()