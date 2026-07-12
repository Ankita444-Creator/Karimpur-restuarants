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
        mapLink: "https://maps.app.goo.gl/tLT9G1c4dii3RJVM8?g_st=ac"
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
const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        rating: 4.4, // এখানে রেটিং দাও
        items: ["Pizza", "Chicken Lollipop", "Burger"],
        mapLink: "https://maps.app.goo.gl/tLT9G1c4dii3RJVM8?g_st=ac"
    }
];

const container = document.getElementById('restaurant-container');

// রেটিং অনুযায়ী স্টার জেনারেট করার ফাংশন
function getStars(rating) {
    return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '');
}

restaurants.forEach(r => {
    container.innerHTML += `
        <div class="card">
            <h2>${r.name} <span style="font-size: 0.8em; color: #f39c12;">${getStars(r.rating)} ${r.rating}</span></h2>
            <p><strong>Phone:</strong> ${r.phone}</p>
            <h3>Menu:</h3>
            <ul>${r.items.map(item => `<li>${item}</li>`).join('')}</ul>
            <a href="${r.mapLink}" target="_blank" class="map-btn">View on Google Maps</a>
        </div>
    `;
});
