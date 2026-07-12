const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        rating: 4.4,
        items: ["Pizza: ₹149", "Chicken Lollipop: ₹129", "Burger: ₹69", "Hakka Noodles: ₹69"],
        mapLink: "https://www.google.com/maps/place/The+Wok+Mama/@23.9725,88.6185,17z"
    },
    {
        name: "Dadabhai Hotel And Restaurant",
        phone: "8392073507",
        rating: 3.9,
        items: ["Chicken Biryani: ₹100", "Egg Roll: ₹40", "Paneer Roll: ₹70", "Chicken Chowmin: ₹80"],
        mapLink: "https://www.google.com/maps" // এখানে ম্যাপের লিংকটি বসিয়ে দাও
    }
];

const container = document.getElementById('restaurant-container');

restaurants.forEach(r => {
    container.innerHTML += `
        <div class="card">
            <h2>${r.name} <span class="rating">⭐ ${r.rating}</span></h2>
            <p><strong>Phone:</strong> ${r.phone}</p>
            <h3>Menu Highlights:</h3>
            <ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <a href="${r.mapLink}" target="_blank" class="map-btn">View on Google Maps</a>
        </div>
    `;
});

const container = document.getElementById('restaurant-container');

restaurants.forEach(r => {
    const menuList = r.items.map(item => `<li>${item}</li>`).join('');
    
    container.innerHTML += `
        <div class="card">
            <h2>${r.name} <span style="font-size: 0.7em; color: #f39c12;">⭐ ${r.rating}</span></h2>
            <p><strong>Phone:</strong> ${r.phone}</p>
            <h3>Menu Highlights:</h3>
            <ul>${menuList}</ul>
            <a href="${r.mapLink}" target="_blank" class="map-btn">View on Google Maps</a>
        </div>
    `;
});
