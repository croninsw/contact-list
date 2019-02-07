import API from "./contact-collection"

document.querySelector("#submitContactBtn").addEventListener("click", () => {
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

$("#journalButton").addEventListener("click", () => {
    const date = $("#journalDate").value
    const concepts = $("#conceptsCovered").value
    const entry = $("#journalEntry").value
    const mood = $("#journalMood").value

    const newJournalEntry = {
        journaldate: date,
        concept: concepts,
        entry: entry,
        mood: mood
    }

    API.saveJournalEntry(newJournalEntry)
})