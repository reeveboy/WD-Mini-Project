const cart = JSON.parse(localStorage.getItem("cart"));
const cartItems = document.getElementById("cart-items");

function makeCartItem(item) {
  const cartItem = `
  <hr />
  <div class="item">
    <img
      src=${item.image}
      alt=${item.name}
    />
    <div class="details">
      <span class="name"
        >Multicolor Ceramic Nacre Mother Of Pearl Decorative Plate
        Showpiece</span
      >
      <span class="rate">Rate: &#8377; ${item.price}</span>
      
      <div class="quantity">
        <span>Quantity:</span>
        <span class="qty">${item.quantity}</span>
      </div>
    </div>
    <div class="price">Total: &#8377; ${item.total}</div>
  </div>
  `;

  return cartItem;
}

function displayCartItems() {
  let html = "";
  let subTotal = 0;
  cart.forEach((item) => {
    const cartItem = makeCartItem(item);
    subTotal += item.total;

    html = html + "\n" + cartItem;
  });
  html =
    html +
    "\n" +
    `
    <hr />
    <div class="final">
      <div>
        <span class="sub-total">Subtotal (${cart.length} items): &#8377; ${subTotal}</span>
      </div>
      <button class="darkBtn">Proceed to Buy</button>
      
    </div>
  `;

  cartItems.innerHTML = html;
}

if (cart) {
  displayCartItems();
} else {
  cartItems.innerHTML = `
    <hr />
    <div class="empty">
      Your Cart is Empty...
    </div>
  `;
}

console.log(cart);
