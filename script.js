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
    },
    {
        name: "SB Restaurant",
        phone: "Not available", // মেনুতে ফোন নম্বর দেওয়া নেই
        rating: 4.3,
        items: [
            "Chicken Biryani (Full): ₹100", 
            "Chicken Kosha (Full): ₹160", 
            "Chilli Chicken (Dry): ₹130", 
            "Paneer Roll: ₹70"
        ],
        mapLink: "https://maps.app.goo.gl/WAZ6HHSGyZCe8y6n6"
    },
    {
        name: "One Bite",
        phone: "06294598998",
        rating: 4.6,
        items: [
            "Chicken Fried Rice: ₹115", 
            "Chicken Pakora (8 pieces): ₹85", 
            "Chilli Chicken Gravy: ₹139", 
            "Blue Legon Virgin Mojito: ₹89"
        ],
        mapLink: "https://maps.app.goo.gl/t1xQcbYNdX6hbexYA"
    },
    {
        name: "Cafe Music",
        phone: "09732664583",
        rating: 4.5, // ছবি দেখে একটি আনুমানিক রেটিং দেওয়া হলো
        items: [
            "Chicken Sandwich: ₹80", 
            "Veg Burger: ₹60", 
            "Cold Coffee: ₹70", 
            "French Fries: ₹60"
        ],
        mapLink: "https://maps.app.goo.gl/XJmYnTYSNn9muS9M8?g_st=ac"
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
