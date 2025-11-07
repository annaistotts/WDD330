import { getParams, loadHeaderFooter } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

loadHeaderFooter();

const productId = getParams("product");
productDetails(productId);

// import productDetails, { addToCart, addToWishlist } from "./productDetails.mjs";
// import { findProductById } from "./externalServices.mjs";
// import { loadHeaderFooter } from "./utils.mjs";

// // function addProductToCart(product) {
// //   const cart = getLocalStorage("so-cart");
// //   if (Array.isArray(cart)) {
// //     cart.push(product);
// //     setLocalStorage("so-cart", cart);
// //   } else {
// //     setLocalStorage("so-cart", [product]);
// //   }
// // }
// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

// // Team Assignment 2
// const productId = getParams("product");
// console.log("does this run");
// productDetails(productId);

// // Wishlist
// async function addToWishlistHandler(e) {
//   const product = await findProductById(e.target.dataset.id);
//   addToWishlist(product);
// }

// document
//   .getElementById("addToWishlist")
//   .addEventListener("click", addToWishlistHandler);

// // --- COMMENTS ---
// const commentForm = document.getElementById("commentForm");
// const commentInput = document.getElementById("commentInput");
// const commentsList = document.getElementById("commentsList");

// // Load comments from localStorage
// function loadComments(productId) {
//   const comments = JSON.parse(localStorage.getItem(`comments-${productId}`)) || [];
//   commentsList.innerHTML = "";
//   comments.forEach((comment) => {
//     const li = document.createElement("li");
//     li.textContent = comment;
//     commentsList.appendChild(li);
//   });
// }

// // Save comment to localStorage
// function saveComment(productId, comment) {
//   const comments = JSON.parse(localStorage.getItem(`comments-${productId}`)) || [];
//   comments.push(comment);
//   localStorage.setItem(`comments-${productId}`, JSON.stringify(comments));
// }

// // Handle comment form submission
// commentForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const comment = commentInput.value.trim();
//   if (!comment) return;

//   saveComment(productId, comment);
//   loadComments(productId);
//   commentInput.value = "";
// });

// // Initialize comments after loading product details
// loadComments(productId);
