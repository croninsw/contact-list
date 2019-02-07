import API from "./contact-collection"

const contactForm = function () {
    document.querySelector("#submitContactBtn").addEventListener("click", () => {
        const name = document.querySelector("#contactName").value
        const phone = document.querySelector("#contactNumber").value
        const address = document.querySelector("#contactAddress").value

        const newContact = {
            contactname: name,
            contactphonenumber: phone,
            contactaddress: address
        }
        API.postNewContact(newContact)
    }
    )
    return contactForm
}

export default contactForm