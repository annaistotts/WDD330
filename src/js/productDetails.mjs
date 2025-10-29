import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";

// let product = {};
export default async function productDetails(productId) {
    const product = await findProductById(productId);
    renderProductDetails(product);
    document.getElementById('addToCart').addEventListener('click', addToCart);
}


export function addToCart(product) {
  const cart = getLocalStorage("so-cart");
  if (Array.isArray(cart)) {
    cart.push(product);
    setLocalStorage("so-cart", cart);
  } else {
    setLocalStorage("so-cart", [product]);
  }
}

export function addToWishlist(product) {
  const wishlist = getLocalStorage("so-wishlist");
  if (Array.isArray(wishlist)) {
    // Only add if not already in wishlist
    const exists = wishlist.some((item) => item.Id === product.Id);
    if (!exists) {
      wishlist.push(product);
      setLocalStorage("so-wishlist", wishlist);
      alert(`${product.Name} added to wishlist! `);
    } else {alert(`${product.Name} is already in your wishlist.`);
    }
  } else {
    setLocalStorage("so-wishlist", [product]);
    alert(`${product.Name} added to wishlist! `);
  }
}


function renderProductDetails(product) {
    document.querySelector("title").innerText = `Sleep Outside | ${product.Name}`
    document.querySelector("#productName").innerText = product.Name;
    document.querySelector("#productNameWithoutBrand").innerText = product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Images.PrimaryLarge;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText = product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').dataset.id = product.Id
}