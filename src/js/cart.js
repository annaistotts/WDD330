import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  document.querySelectorAll('.cart-card__remove').forEach(item => {
    item.addEventListener('click', (e) => {
      const cartItems = getLocalStorage("so-cart") || [];
      setLocalStorage("so-cart", cartItems.filter(ci => ci.Id !== item.dataset.id ));
      item.parentElement.remove();
    })
  })
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <span class="cart-card__remove" data-id="${item.Id}">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6 6L18 18M6 18L18 6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
    </svg>
  </span>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  
</li>`;

  return newItem;
}

renderCartContents();
