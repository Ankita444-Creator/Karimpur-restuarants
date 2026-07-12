const restaurants = [
    {
        name: "The Wok Mama",
        phone: "07718296610",
        items: [
            "Wok Mama Special Pizza: ₹149",
            "Chicken Lollipop: ₹129",
            "Chicken Club Burger: ₹69",
            "Hakka Noodles: ₹69/79/89"
        ]
    }
];

const container = document.getElementById('restaurant-container');

restaurants.forEach(r => {
    // মেনু আইটেমগুলোকে লিস্ট আকারে সাজানোর জন্য map ব্যবহার করা হয়েছে
    const menuList = r.items.map(item => `<li>${item}</li>`).join('');
    
    container.innerHTML += `
        <div class="card">
            <h2>${r.name}</h2>
            <p><strong>Contact:</strong> ${r.phone}</p>
            <h3>Menu:</h3>
            <ul>${menuList}</ul>
        </div>
    `;
});
