import contact from "./contact"
import API from "./contact-collection"
import addContactstoDOM from "./addtodom"

const contactList = function() {
    API.loadExistingContacts().then(contactArray => {
        contactArray.forEach(entry => {
            const html = contact.createContactHTML(entry)
            addContactstoDOM(html)
        })
    })
}

export default contactList
