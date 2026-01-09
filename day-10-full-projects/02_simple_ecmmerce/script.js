let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Headphones", price: 2000 }
];

let cart = [];
let total = 0;

let productDiv = document.getElementById("products");
let cartList = document.getElementById("cart");
let totalText = document.getElementById("total");

for (let i = 0; i < products.length; i++) {
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${products[i].name}</h3>
    <p>₹${products[i].price}</p>
    <button onclick="addToCart(${i})">Add to Cart</button>
  `;
  productDiv.appendChild(div);
}

function addToCart(index) {
  cart.push(products[index]);
  total += products[index].price;

  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    cartList.innerHTML += "<li>" + cart[i].name + "</li>";
  }

  totalText.innerText = "Total: ₹" + total;
}
