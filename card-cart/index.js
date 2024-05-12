window.addEventListener('load', () => {

    const cartCountElement = document.getElementById("cart-count");
    cartCountElement.innerText = 0;

});

document.addEventListener("DOMContentLoaded", function() {
    
    const products = [
        { id: 1, name: "clean", description: "Our deep cleaning service ensures a thorough and comprehensive cleaning of your home, leaving every nook and corner spotless. Our professional cleaners use advanced techniques and eco-friendly products to achieve the highest standards of cleanliness.", image: "image/1.jpg", time: "00:00", cost: 100 },
        { id: 2, name: "clean", description: "Say goodbye to pests with our effective pest control service. Our trained technicians will inspect your property, identify the pest issues, and provide tailored solutions to eradicate pests such as cockroaches, rodents, termites, and more. We use safe and efficient methods to ensure a pest-free environment for you and your family.", image: "image/2.avif", time: "00:00", cost: 80 },
        { id: 3, name: "plumbing", description: "Transform your home with our expert home painting service. Whether you're looking to refresh your interiors or give your exteriors a makeover, our professional painters deliver impeccable results. From color consultation to flawless execution, we ensure a hassle-free painting experience.", image: "image/3.jpg", time: "00:00", cost: 200 },
        { id: 4, name: "plumbing", description: "Get reliable plumbing solutions with our expert plumbing service. From fixing leaks and clogs to installing new fixtures, our certified plumbers handle all your plumbing needs efficiently. We prioritize quality workmanship and customer satisfaction.", image: "image/4.webp", time: "00:00", cost: 120 },
        { id: 5, name: "electrical", description: "Ensure the safety and efficiency of your electrical systems with our professional electrical service. Our skilled electricians offer a wide range of services including installations, repairs, and maintenance. Trust us for reliable solutions and peace of mind.", image: "image/5.webp", time: "00:00", cost: 150 },
        { id: 6, name: "clean", description: "Don't let appliance breakdowns disrupt your routine. Our appliance repair service provides fast and efficient solutions for all your appliance issues. From refrigerators to washing machines, we've got you covered.", image: "image/6.avif", time: "00:00", cost: 90 },
        { id: 7, name: "car", description: "Enhance the functionality and aesthetics of your space with our carpentry service. Our skilled carpenters specialize in custom furniture, cabinetry, and woodwork. Experience craftsmanship at its best with Urban Company.", image: "image/7.jpg", time: "00:00", cost: 180 },
        { id: 8, name: "car", description: "Ensure a clean and hygienic environment with our home sanitization service. Our professional cleaners use industry-standard disinfectants and sanitizers to eliminate harmful germs and viruses. Protect your loved ones with our thorough sanitization process.", image: "image/8.webp", time: "00:00", cost: 100 },
        { id: 9, name: "electrical", description: "Give your car the care it deserves with our premium car cleaning service. From exterior washing to interior detailing, our expert cleaners ensure your vehicle looks as good as new. Experience the ultimate convenience with doorstep car", image: "image/9.jpeg", time: "00:00", cost: 70 },
        { id: 10, name: "clean", description: "Protect your home and loved ones with our comprehensive home security solutions. From CCTV installation to alarm systems, we offer tailored security services to meet your specific needs. Safeguard what matters most with Urban Company.", image: "image/10.jpg", time: "00:00", cost: 250 }
    ];
    


    let cartList = []

    function createProductCard(product) {
        const productList = document.getElementById("product-list");

        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");

        const cardContent = `
            <div class="card" style="max-width: 100%;">
                <img src="${product.image}" class="card-img-top" alt="Product Image">
                <div class="card-body">
                    <strong class="card-title">${product.name}</strong>
                    <p class="card-text">${product.description}</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cost: ${product.cost}</li>
                    </ul>
                    <button class="addcart btn btn-primary" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        card.innerHTML = cardContent;
        productList.appendChild(card);

        const addToCartButton = card.querySelector(".addcart");

        addToCartButton.addEventListener("click", function() {
            const productId = product.id; // Assuming product is accessible here
            const existingCartItem = cartList.find(item => item.id === productId);
        
            if (existingCartItem) {
                existingCartItem.quantity++;
            } else {
                cartList.push({
                    id: productId,
                    name: product.name,
                    quantity: 1,
                    time: product.time,
                    cost: parseInt(product.cost) // Ensure cost is parsed as an integer
                });
            }
        
            updateCartDisplay();
            appendingcartlist();
        });
        
    }

    function updateCartDisplay() {
        const cartCountElement = document.getElementById("cart-count");
        const cartListElement = document.getElementById("cart-list");

        cartListElement.innerHTML = "";

        cartCountElement.innerText = cartList.length;
        cartList.forEach(item => {
            // Update cart list display
        });
        cartCountElement.innerHTML = cartCountElement.innerText;

        // Save cartList to local storage
        localStorage.setItem('cartList', JSON.stringify(cartList));

    }
    function clearCart(){
        cartCountElement.innerHTML = 0
    }

    products.forEach(product => {
        createProductCard(product);
    });

    updateCartDisplay();
    cartList.forEach((value)=>{ cartList.pop(value)})


    function appendingcartlist() {
        const productList = document.querySelector(".chekin-section");
        productList.innerHTML = '';

        for (const product of cartList) {
            const cardContent = document.createElement("div");
            card = `
                <div class="card">
                    <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-quantity">Cost : ${product.cost}</p>
                    </div>
                </div>`;

            cardContent.innerHTML = card;
            productList.append(cardContent);
        }
    }
});
