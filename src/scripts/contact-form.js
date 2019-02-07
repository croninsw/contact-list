import API from "./contact-collection"

document.querySelector("#submitContactBtn").addEventListener("click", event => {
    const name = document.querySelector("#contactName").value
    const phone = document.querySelector("#contactNumber").value
    const address = document.querySelector("#contactAddress").value

    const addContactToDOM = (currentContact) => {
        currentContact = {
            name: name,
            phone: phone,
            address: address,
        }
        document.querySelector("#contactList").innerHTML += currentContact
    }
})