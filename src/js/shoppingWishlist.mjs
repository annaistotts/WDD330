import { getLocalStorage, setLocalStorage, renderListWithTemplate, alertMessage } from "./utils.mjs";

export default function renderWishlist() {
  const wishlist = getLocalStorage("so-wishlist");
  console.log(wishlist);
  const outputEl = document.querySelector(".wishlist-list");
  renderListWithTemplate(wishlistTemplate, outputEl, wishlist);
  document.querySelectorAll(".cart-card__remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {btn.parentElement.remove();});
  });

  // Add to cart
  document.querySelectorAll(".move-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      let wishlist = getLocalStorage("so-wishlist") || [];
      let cart = getLocalStorage("so-cart") || [];

      const item = wishlist.find((i) => i.Id === id);
      if (!item) return;

      const alreadyInCart = cart.some((i) => i.Id === id);
      if (!alreadyInCart) {
        cart.push(item);
        setLocalStorage("so-cart", cart);
        alertMessage(`${item.Name} moved to cart! 🛒`);
      }

      wishlist = wishlist.filter((i) => i.Id !== id);
      setLocalStorage("so-wishlist", wishlist);
      btn.parentElement.remove();
    });
  });
}

function wishlistTemplate(item) {

  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
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
   <button class="move-to-cart" data-id="${ item.Id }">Move to Cart</button>
</li>`;
  return newItem;
}

