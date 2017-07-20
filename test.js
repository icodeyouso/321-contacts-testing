const addContact = require("./contacts.js").addContact
const grabber = require("./contacts.js").grabber// grabber function from contacts from contacts.js
const invalidGrabber = require("./contacts.js").invalidGrabber//function that returns invalid data  array 
const setter = require("./contacts.js").setter//setter function from contacts.js
const addContacts = require("./contacts.js").addContacts
const newContactsToAdd = require("./contacts.js").newContactsToAdd

// run addContact, give it valid inputs
try {
  addContact("mike", "parker", "join@gmail.com")
}
catch(ex) {
  // console.log(ex)
}

//json =javascript object notation
const expectedSingleContact = [{
  first_name: "mike",
  last_name: 'parker',
  email: 'join@gmail.com'
}]

console.assert((grabber()[0].email === expectedSingleContact[0].email), "i failed on valid data for  addContact")

setter([])

//run addContact with invalid data
try {
  addContact(1, "parker", "join@gmail.com")
}

catch (ex) {
  //expected error
}

//use grabber to confirm that contactStorage has NOT been edited--does not contain invalid data
let grabberResult = grabber()

console.assert(Array.isArray(grabberResult), "not an array")

setter([])

//NOW TESTING ADD CONTACTS

let grabInvalidResult = invalidGrabber()
let errorThrown
try {
  addContacts([
    {email: "steve@example.com", firstName: "Steve", lastname: "Little"},
    {email: 1, firstName: "Trevor", lastname: "Little"},
    {email: 1, firstName: "Trevor", lastname: "Little"}
  
  ])
} catch (err) {
  errorThrown = err
}

console.assert(errorThrown !== null, "No error thrown on invalid contact data!")
console.assert(Array.isArray(grabInvalidResult), "i am not an array")

setter([])
console.log("i hit the bottom of file")
