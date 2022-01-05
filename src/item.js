// import { items } from "./cart";

let quantity = 1;

const qty = document.getElementById("qty");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

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
const itemIndex = path[path.length - 1];
