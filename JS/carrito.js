let cart = [];

function agregarAlCarrito(productName, price) {
    
    const item = cart.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    actualizarCarrito();
    mostrarCarrito();
}

function eliminarDelCarrito(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart)); 
    actualizarCarrito();
    mostrarCarrito();
}

function sumarCantidad(productName) {
    const item = cart.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart)); 
        actualizarCarrito();
        mostrarCarrito();
    }
}

function restarCantidad(productName) {
    const item = cart.find(item => item.name === productName);

    if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart)); 
        actualizarCarrito();
        mostrarCarrito();
    } else if (item && item.quantity === 1) {
        eliminarDelCarrito(productName);
    }
}

function actualizarCarrito() {
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        cartButton.textContent = `Carro de Compras (${totalQuantity})`;
    }
}

function mostrarCarrito() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <span>${item.name}</span>
            <span>Cantidad: ${item.quantity}</span>
            <span>${(item.price * item.quantity).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</span>
            <button onclick="sumarCantidad('${item.name}')">+</button>
            <button onclick="restarCantidad('${item.name}')">-</button>
            <button onclick="eliminarDelCarrito('${item.name}')">Eliminar</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    totalElement.textContent = total.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}

document.addEventListener('DOMContentLoaded', function () {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    actualizarCarrito();
    mostrarCarrito();
});
