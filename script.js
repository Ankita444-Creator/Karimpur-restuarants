const restaurants = [
    { name: "The Wok Mama", phone: "07718296610" }
];

const container = document.getElementById('restaurant-container');

restaurants.forEach(r => {
    container.innerHTML += `
        <div class="card">
            <h2>${r.name}</h2>
            <p><strong>Contact:</strong> ${r.phone}</p>
        </div>
    `;
});
