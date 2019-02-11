import API from "./contact-collection"

 const contactForm = () => {
        document.querySelector("#submitContactBtn").addEventListener("click", () => {
            const name = document.querySelector("#contactName").value
            const phone = document.querySelector("#contactNumber").value
            const address = document.querySelector("#contactAddress").value

            const newContact = {
                name: name,
                phone: phone,
                address: address
            }
            API.postNewContact(newContact)
        }
        )
        return contactForm
    }

}


export default contactForm


