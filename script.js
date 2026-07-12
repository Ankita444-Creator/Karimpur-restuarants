const restaurants = [
    {
        name: "The Wok Mama", phone: "07718296610", rating: 4.4, mapLink: "https://maps.app.goo.gl/i9h17DDYkHVADNiL6?g_st=ac",
        menu: [
            {name: "Burn Garlic Rice", src: "images/1000357161.jpg"},
            {name: "Crispy chicken", src: "images/1000357163.jpg"},
            {name: "Singaporean Chicken Noodles", src: "images/1000357164.jpg"},
            {name: "Choon Hot Wings", src: "images/1000357165.jpg"},
            {name: "Fruit Punch", src: "images/1000357166.jpg"},
            {name: "Chicker Club Burger", src: "images/1000357167.jpg"},
            {name: "Chicken Lollipop", src: "images/1000357168.jpg"},
            {name: "Wok Mama Special Pizza", src: "images/1000357169.jpg"}
        ]
    },
    {
        name: "Dadabhai Hotel And Restaurant", phone: "8392073507", rating: 3.9, mapLink: "https://maps.app.goo.gl/ctAA6LNwFcsSYZyE9",
        items: ["Chicken Biryani: ₹100", "Egg Roll: ₹40", "Paneer Roll: ₹70", "Chicken Chowmin: ₹80"]
    },
    {
        name: "Premjit Lodge & Restaurant", phone: "9733789579", rating: 3.7, mapLink: "https://maps.app.goo.gl/t1MkS85quLrWi3C58",
        items: ["Chicken Biryani: ₹120", "Chicken Butter Masala: ₹300", "Paneer Butter Masala: ₹100", "Tandoori Roti: ₹8"]
    },
    {
        name: "SB Restaurant", phone: "Not available", rating: 4.3, mapLink: "https://maps.app.goo.gl/WAZ6HHSGyZCe8y6n6",
        items: ["Chicken Biryani: ₹100", "Chicken Kosha: ₹160", "Chilli Chicken: ₹130", "Paneer Roll: ₹70"]
    },
    {
        name: "One Bite", phone: "06294598998", rating: 4.6, mapLink: "https://maps.app.goo.gl/t1xQcbYNdX6hbexYA",
        items: ["Chicken Fried Rice: ₹115", "Chicken Pakora: ₹85", "Chilli Chicken Gravy: ₹139", "Blue Legon Virgin Mojito: ₹89"]
    },
    {
        name: "Cafe Music", phone: "09732664583", rating: 4.5, mapLink: "https://maps.app.goo.gl/XJmYnTYSNn9muS9M8?g_st=ac",
        items: ["Chicken Sandwich: ₹80", "Veg Burger: ₹60", "Cold Coffee: ₹70", "French Fries: ₹60"]
    },
    {
        name: "Cafe Heaven", phone: "07003798789", rating: 4.5, mapLink: "https://maps.app.goo.gl/99nECNq4k2pqJs3E9?g_st=ac",
        items: ["Chicken Biryani: ₹130", "Chicken Kosha: ₹150", "Paneer Butter Masala: ₹110", "Veg Fried Rice: ₹90"]
    }
];

const container = document.getElementById('restaurant-container');
const lb = document.getElementById('lightbox');

restaurants.forEach((r, idx) => {
    // Wok Mama-র জন্য বাটন, বাকিদের জন্য লিস্ট
    let menuContent = r.name === "The Wok Mama" 
        ? `<button class="map-btn" onclick="openMenu(${idx})">Menu</button>` 
        : `<h3>Menu Highlights:</h3><ul>${r.items.map(i => `<li>${i}</li>`).join('')}</ul>`;

    container.innerHTML += `
        <div class="card">
            <h2>${r.name} <span class="rating">⭐ ${r.rating}</span></h2>
            <p><strong>Phone:</strong> ${r.phone}</p>
            ${menuContent}
            <a href="${r.mapLink}" target="_blank" class="map-btn">View on Google Maps</a>
        </div>
    `;
});

function openMenu(idx) {
    const items = restaurants[idx].menu;
    lb.style.display = 'flex';
    
    function show(i) {
        lb.innerHTML = `
            <div class="slide">
                <img src="${items[i].src}">
                <h3 class="food-name">${items[i].name}</h3>
                <button class="nav-btn" onclick="${i+1 < items.length ? `show(${i+1})` : 'lb.style.display=\"none\"'}">
                    ${i+1 < items.length ? 'Next' : 'Close'}
                </button>
            </div>
        `;
    }
    show(0);
}

// Mouse Tracker Logic
const follower = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});
