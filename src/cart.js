const cart = JSON.parse(localStorage.getItem("cart"));
const cartItems = document.getElementById("cart-items");
let emptyCartBtn = null;

console.log(cart);

function makeCartItem(item) {
  const cartItem = `
  <hr />
  <div class="item">
    <img
      src=${item.image}
      alt=${item.name}
    />
    <div class="details">
      <a href="/shop/${item.id}.html" class="name"
        >Multicolor Ceramic Nacre Mother Of Pearl Decorative Plate
        Showpiece</a
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
      <button id="emptyCart" class="redBtn">Empty Cart</button>
    </div>
  `;

  cartItems.innerHTML = html;

  emptyCartBtn = document.getElementById("emptyCart");

  emptyCartBtn.onclick = () => {
    localStorage.clear();
    cartItems.innerHTML = `
      <hr />
      <div class="empty">
        Your Cart is Empty...
      </div>
    `;
  };
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
