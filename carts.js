function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPrice = 0;

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <p class="cart-item-text">${item.name} - ₹${item.price} x ${item.quantity}</p>
                <br>
            
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    document.getElementById("total-price").innerText = totalPrice;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item from cart
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

function ordernow() {
    let messageContainer = document.getElementById("order-message");

    if (!messageContainer) {
        messageContainer = document.createElement("p");
        messageContainer.id = "order-message";
        messageContainer.style.color = "green";
        messageContainer.style.fontWeight = "bold";
        messageContainer.style.marginTop = "20px";
        document.querySelector(".bill-container").appendChild(messageContainer);
    }

    messageContainer.innerText = "Your Order has been placed Successfully 🤩";

    localStorage.removeItem("cart");
    loadCart();
}

document.addEventListener("DOMContentLoaded", loadCart);


