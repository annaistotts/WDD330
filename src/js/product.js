import { getParams } from "./utils.mjs";
import productDetails, { addToCart } from "./productDetails.mjs";
import { findProductById } from "./productData.mjs";

// function addProductToCart(product) {
//   const cart = getLocalStorage("so-cart");
//   if (Array.isArray(cart)) {
//     cart.push(product);
//     setLocalStorage("so-cart", cart);
//   } else {
//     setLocalStorage("so-cart", [product]);
//   }
// }
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// Team Assignment 2
const productId = getParams("product");
console.log("does this run");
productDetails(productId);
