function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    let existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(productName + " added to cart!");
}
