const addContact = require("./contacts.js").addContact

const grabber = require("./contacts.js").grabber// grabber function from contacts from contacts.js
// const invalidGrabber = require("./contacts.js").invalidGrabber//function that returns invalid data  array 

const setter = require("./contacts.js").setter//setter function from contacts.js

//declare contactStorage

// run addContact, give it valid inputs
try {
  addContact("mike", "parker", "join@gmail.com")
}
catch(ex) {
  // console.log(ex)

}
//console.assert: did the function above add the contact to contactStorage?
//  console.log(grabber()[0].email)

const expectedSingleContact = [{
  first_name: "mike",
  last_name: 'parker',
  email: 'join@gmail.com'
}]


//only after the above is working, TDD:
// red: write a failing test: if i give add contact a number, it SHOULDN'T add it to contact storage
console.log(grabber([0]))
console.log(expectedSingleContact[0])
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
// console.log(grabberResult)

console.assert(Array.isArray(grabberResult), "not an array")

console.assert(grabberResult.length === 0, "grabberesult was to be empty")



// let grabInvalidResult = invalidGrabber()

// console.assert(Array.isArray(grabInvalidResult), "i am not an array")

// console.assert(grabInvalidResult.length === 0, "grabinvalid was to be empty")
  console.log("i hit the bottom of file")