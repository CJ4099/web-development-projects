let total = 0;

function addToCart(name, price) {
  let cart = document.getElementById("cart");

  let li = document.createElement("li");
  li.innerText = name + " - " + price;
  cart.appendChild(li);

  total += price;
  document.getElementById("total").innerText = total;
}

