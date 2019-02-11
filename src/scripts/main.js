import contactForm from "./contact-form"
import contactList from "./contact-list"
import API from "./contact-collection";

contactForm()
contactList()

document.querySelector("body").addEventListener("click", (event) => {
    if (event.target.id.startsWith("deleteButton")) {
        let id = parseInt(event.target.id.split("--")[1])
        return (API.deleteContact(id))
        .then(() => {
            document.querySelector("#contactList").innerHTML = ""
            return
        })
        .then(() => {
            return contactList()
        })
    }
})

