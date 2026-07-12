const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        rating: 4.4,
        items: ["Pizza: ₹149", "Chicken Lollipop: ₹129", "Burger: ₹69", "Hakka Noodles: ₹69"],
        mapLink: "https://maps.app.goo.gl/i9h17DDYkHVADNiL6?g_st=ac"
    },
    {
        name: "Dadabhai Hotel And Restaurant",
        phone: "8392073507",
        rating: 3.9,
        items: ["Chicken Biryani: ₹100", "Egg Roll: ₹40", "Paneer Roll: ₹70", "Chicken Chowmin: ₹80"],
        mapLink: "https://maps.app.goo.gl/ctAA6LNwFcsSYZyE9"
    },
    {
        name: "Premjit Lodge & Restaurant",
        phone: "9733789579", // মেনু কার্ড থেকে পাওয়া নম্বর
        rating: 3.7,
        items: [
            "Chicken Biryani: ₹120", 
            "Chicken Butter Masala (Full): ₹300", 
            "Paneer Butter Masala: ₹100", 
            "Tandoori Roti: ₹8"
        ],
        mapLink: "https://maps.app.goo.gl/t1MkS85quLrWi3C58"
    }
];

const container = document.getElementById('restaurant-container');

// কন্টেইনার খালি করে নতুন করে সব কার্ড লোড করা হচ্ছে
container.innerHTML = ""; 

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
