const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        items: [
            "Wok Mama Special Pizza: ₹149",
            "Chicken Lollipop: ₹129",
            "Chicken Club Burger: ₹69",
            "Hakka Noodles: ₹69/79/89"
        ],
        // এখানে গুগল ম্যাপের লোকেশন লিংক বসাবেন
        mapLink: "https://www.google.com/maps/place/The+Wok+Mama/@23.9725,88.6185,17z" 
    }
];

const container = document.getElementById('restaurant-container');

restaurants.forEach(r => {
    const menuList = r.items.map(item => `<li>${item}</li>`).join('');
    
    container.innerHTML += `
        <div class="card">
            <h2>${r.name}</h2>
            <p><strong>Phone:</strong> ${r.phone}</p>
            <h3>Menu:</h3>
            <ul>${menuList}</ul>
            <a href="${r.mapLink}" target="_blank" class="map-btn">View on Google Maps</a>
        </div>
    `;
});
