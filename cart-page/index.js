const services = [
    { id: 1, name: 'Plumbing', price: 100 },
    { id: 2, name: 'Cleaning', price: 80 },
    { id: 3, name: 'Electrical', price: 120 },
    { id: 4, name: 'Carpentry', price: 90 },
    { id: 5, name: 'Painting', price: 110 },
    { id: 6, name: 'Landscape', price: 150 },
    { id: 7, name: 'Roofingss', price: 200 },

];

const serviceList = document.getElementById('serviceList');
const cartList = document.getElementById('cartList');
const clearCartBtn = document.getElementById('clearCartBtn');

function renderServices() {
    serviceList.innerHTML = '';
    services.forEach(service => {
        const li = document.createElement('li');
        li.textContent = `${service.name} - $${service.price}`;
        
        const addButton = document.createElement('button');
        addButton.textContent = "Add to Cart";
        addButton.addEventListener('click', () => addToCart(service));
        
        li.appendChild(addButton);
        serviceList.appendChild(li);
    });
}

function addToCart(service) {
    const cart = getCart();
    cart.push(service);
    saveCart(cart);
    renderCart();
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1); 
    saveCart(cart);
    renderCart();
}

function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cart = getCart();
    cartList.innerHTML = '';
    cart.forEach((service, index) => {
        const li = document.createElement('li');
        li.textContent = `${service.name} - $${service.price}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeFromCart(index));
        
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    total();
}

function clearCart() {
    localStorage.removeItem('cart');
    renderCart();
}

function total(){
    let total = 0;
    let cart = getCart();
    for (let i in cart){
        total += cart[i].price;
    }
    const total_block = document.querySelector('#total')
    total_block.innerHTML='';
    const total_sec = document.createElement('h3');
    total_sec.textContent = `Total Payable : $${total}`
    cartList.appendChild(total_sec)
}

clearCartBtn.addEventListener('click', clearCart);

renderServices();
renderCart();
