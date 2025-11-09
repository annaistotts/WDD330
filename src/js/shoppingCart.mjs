import { getLocalStorage, setLocalStorage, renderListWithTemplate, alertMessage } from "./utils.mjs";

export default function shoppingCart() {
  const cartItems = getLocalStorage("so-cart");
  console.log(cartItems);
  const outputEl = document.querySelector(".product-list");
  renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  const total = calculateListTotal(cartItems);
  displayCartTotal(total);
  document.querySelectorAll(".cart-card__remove").forEach((btn) => {
    btn.addEventListener("click", (e) => {btn.parentElement.remove();});
  });

  // add to wishlist
  document.querySelectorAll(".move-to-wishlist").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.dataset.id;
      let cartItems = getLocalStorage("so-cart") || [];
      let wishlist = getLocalStorage("so-wishlist") || [];

      // find item in cart
      const item = cartItems.find((i) => i.Id === id);
      console.log(item);
      if (!item) return;

      // only add if not in wishlist
      const InWishlist = wishlist.some((i) => i.Id === id);
      if (!InWishlist) {
        wishlist.push(item);
        setLocalStorage("so-wishlist", wishlist);
        alertMessage(`${item.Name} added to wishlist!`);
      } else {
        alertMessage(`${item.Name} is already in your wishlist.`);
      }
    });
  });
}

function calculateListTotal(list) {
  const amounts = list.map((item) => item.FinalPrice);
  const total = Math.round(amounts.reduce((sum, item) => sum + item, 0) * 100)/100;
return total;
}

function displayCartTotal(total) {
  if (total > 0) {
    // show our checkout button and total if there are items in the cart.
    document.querySelector(".list-footer").classList.remove("hide");
    document.querySelector(".list-total").innerText += ` $${total}`;
  } else {
    document.querySelector(".list-footer").classList.add("hide");
  }
}

function cartItemTemplate(item) {
  
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
   <button class="move-to-wishlist" data-id="${ item.Id }"> Wishlist</button>
</li>`;
  return newItem;
}

