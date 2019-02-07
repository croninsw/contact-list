const contact = {
    createContactHTML: function (entry) {
        return `
        <section>
            <h2>${entry.name}</h2>
            <div>${entry.phone}</div>
            <div>${entry.address}</div>
        </section>
        <hr>
    `
    }
}

export default contact