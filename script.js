const restaurants = [
    {
        name: "The Wok Mama",
        phone: "077182 96610",
        items: [
            "Wok Mama Special Pizza: ₹149",
            "Chicken Lollipop: ₹129",
            "Chicken Club Burger: ₹69",
            "Hakka Noodles: ₹69/79/89"
        ]
    }
];

function loadRestaurants() {
    const container = document.getElementById('restaurant-container');
    
    restaurants.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <h2>${r.name}</h2>
            <p><strong>Contact:</strong> ${r.phone}</p>
            <h3>Menu Highlights:</h3>
            <ul>
                ${r.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Initialize the display
loadRestaurants();
const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        image: "images/wokmama.jpg", // এখানে তোমার ইমেজের নাম দাও
        items: ["Pizza", "Chicken Lollipop", "Burger"]
    }
];

function loadRestaurants() {
    const container = document.getElementById('restaurant-container');
    restaurants.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url(${r.image})`;
        
        card.innerHTML = `
            <div class="card-content">
                <h2>${r.name}</h2>
                <a href="tel:${r.phone}" class="btn">Call Now</a>
            </div>
        `;
        container.appendChild(card);
    });
}
loadRestaurants();
const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610"
    }
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
