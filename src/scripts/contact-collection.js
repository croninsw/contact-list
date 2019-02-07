const API = {
    loadExistingContacts: function () {
        return fetch("http://0.0.0.0:8080/database.json")
            .then(response => response.json())
    },
    postNewContact: function (obj) {
        return fetch("http://0.0.0.0:8080/database.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
    }
}

export default API