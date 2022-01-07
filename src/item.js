// import { items } from "./cart";

let quantity = 1;

const qty = document.getElementById("qty");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const addToCartBtn = document.getElementsByClassName("darkBtn")[0];
const image = document.getElementsByClassName("image")[0];
const price = document.getElementById("price");

qty.innerHTML = quantity;

plusBtn.onclick = () => {
  quantity++;
  qty.innerHTML = quantity;
};

minusBtn.onclick = () => {
  if (quantity == 1) return;
  quantity--;
  qty.innerHTML = quantity;
};

const path = window.location.pathname.split(".")[0].split("/");
const itemIndex = parseInt(path[path.length - 1]);

console.log(itemIndex);

addToCartBtn.onclick = () => {
  let cartExists = localStorage.getItem("cart");

  if (!cartExists) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  let cart = JSON.parse(localStorage.getItem("cart"));

  const index = cart.findIndex((item) => {
    if (item.name === image.getAttribute("alt")) {
      return true;
    }
    return false;
  });

  if (index === -1 || !cart) {
    cart.push({
      id: itemIndex,
      image: image.getAttribute("src"),
      name: image.getAttribute("alt"),
      quantity: parseInt(qty.innerText, 10),
      price: parseInt(price.innerText.split(" ")[1], 10),
      total:
        parseInt(qty.innerText, 10) *
        parseInt(price.innerText.split(" ")[1], 10),
    });
  } else {
    cart[index].quantity += parseInt(qty.innerText, 10);
    cart[index].total +=
      parseInt(price.innerText.split(" ")[1], 10) * parseInt(qty.innerText, 10);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  document.body.innerHTML =
    `
  <div class="alert success">
    <span class="closebtn">&times;</span>  
    <strong>Success!</strong> Item added to cart.
  </div>` + document.body.innerHTML;

  close = document.getElementsByClassName("closebtn");
  close[0].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);

    close[0].parentNode.removeChild(close[i]);
  };
};
