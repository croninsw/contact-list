// contact component that displays a person's contact information
// need an addtodom function
const contact = {
    createContactHTML: function (entry) {
        return `
        <section>
            <h2>${entry.name}</h2>
            <div>${entry.phone}</div>
            <div>${entry.address}</div>
        </section>
    `
    }
}

export default contact