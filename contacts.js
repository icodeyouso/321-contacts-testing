const print = require('node-print')
const grabber = function () {
  return contactStorage
}
const setter = function (value) {
  contactStorage.push(value)
}
const invalidGrabber = function (){
   return invalidContacts
 }
 
const invalidContacts = []
let contactStorage = []

const newContactsToAdd = [{
  "first_name": "Tanny",  
  "last_name": "Vibert",
  "email": "tvibert0@illinois.edu"
}, {
  "first_name": "Tova",
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
}, {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
}, {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
}, {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": "vcankett4@washington.edu"
}, {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
}, {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
}, {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
}, {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
}, {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
}, {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
}, {
  "first_name": "Northrop", 
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
}, {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
}, {
  "first_name": "Willdon",
  "last_name": "Hedley",
  "email": "whedleyd@purevolume.com"
}, {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
}, {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
}, {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbr`ownceyg@yelp.com"
}, {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
}, {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
}, {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
}]

const addContact = function (firstName, lastName, email) {
  //check value of incoming args
  if (typeof firstName === "string" && typeof lastName === "string" && typeof email === "string") {
    contactStorage.push({
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  } else {
    throw new Error("one of your values is not a string")
  }
}

const addContacts = function (contactData) {

  contactData.map(function (contact) {
    
    try  {
      addContact(contact.first_name, contact.last_name, contact.email);
    }
    catch (ex) {
      invalidContacts.push(contact)
    }
  })
 
  if(invalidContacts.length > 0) {
    throw new Error("could not import " + invalidContacts.length + " contacts")
  }
}

const printContacts = function (contacts) {
  const firstNames = contacts.sort(function (contactA, contactB) {
    if (contactA.first_name < contactB.first_name) {
      return -1
    }
    if (contactB.first_name < contactA.first_name) {
      return 1
    }

    return 0
  })
  print.pt(firstNames)
}

module.exports = {
  addContact,
  grabber,
  setter,
  invalidGrabber,
  addContacts,
  newContactsToAdd
}

