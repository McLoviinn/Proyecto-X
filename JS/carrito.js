let cart = [];

function agregarAlCarrito(productName, price) {
    const item = cart.find(item => item.name === productName);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Almacena el carrito en el almacenamiento local
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartButton = document.getElementById('cartButton');
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartButton.textContent = `Carro de Compras (${totalQuantity})`;
}

document.addEventListener('DOMContentLoaded', function () {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    actualizarCarrito();
});
