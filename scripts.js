// Function to update the cart count and cart items display
function updateCartDisplay() {
  // Retrieve the cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Update the cart count in the navbar
  document.getElementById('cart-count').textContent = cart.length;

  // Update the cart items on the cart page (if we are on the cart page)
  if (document.getElementById('cart-items')) {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';  // Clear existing cart items

    let total = 0;
    cart.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
      total += item.price;
    });

    // Display the total price
    document.getElementById('total-price').innerHTML = `Total: $${total.toFixed(2)}`;
  }
}

// Function to add a product to the cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));  // Save cart to localStorage
  updateCartDisplay();
}

// Function to remove a product from the cart
function removeFromCart(name) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('cart', JSON.stringify(cart));  // Update cart in localStorage
  updateCartDisplay();
}

// Ensure the cart is displayed correctly when the page loads
updateCartDisplay();
