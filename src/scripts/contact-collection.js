const API = {
    loadExistingContacts: function () {
        return fetch("http://localhost:8088/contacts")
            .then(response => response.json())
    },
    postNewContact: function (obj) {
        return fetch("http://localhost:8088/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    }
}

export default API