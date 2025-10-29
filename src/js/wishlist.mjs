import { getLocalStorage, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderWishlist() {
  const wishlist = getLocalStorage("so-wishlist") || [];
  const htmlItems = wishlist.map((item) => wishlistTemplate(item));
  document.querySelector(".wishlist-list").innerHTML = htmlItems.join("");

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
        alert(`${item.Name} moved to cart! 🛒`);
      }

      wishlist = wishlist.filter((i) => i.Id !== id);
      setLocalStorage("so-wishlist", wishlist);
      btn.parentElement.remove();
    });
  });
}

function wishlistTemplate(item) {
  return `
    <li class="wishlist-card divider">
      <img src="${item.Image}" alt="${item.Name}" />
      <h2>${item.Name}</h2>
      <p>$${item.FinalPrice}</p>
      <button class="move-to-cart" data-id="${item.Id}">🛒 Move to Cart</button>
    </li>
  `;
}

renderWishlist();