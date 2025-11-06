import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";

let product = {};


export default async function productDetails(productId) {
    product = await findProductById(productId);
    renderProductDetails();
    document.getElementById('addToCart').addEventListener('click', addToCart);
}


function addToCart() {
  let cartContents = getLocalStorage("so-cart");

  if (!cartContents) {
    cartContents = [];
  } 

  cartContents.push(product);
  setLocalStorage('so-cart', cartContents)
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


function renderProductDetails() {
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

// --- COMMENTS ---
const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const commentsList = document.getElementById("commentsList");

// Load comments from localStorage
export function loadComments(productId) {
  const comments = JSON.parse(localStorage.getItem(`comments-${productId}`)) || [];
  commentsList.innerHTML = "";
  comments.forEach((comment) => {
    const li = document.createElement("li");
    li.textContent = comment;
    commentsList.appendChild(li);
  });
}

// Save comment to localStorage
function saveComment(productId, comment) {
  const comments = JSON.parse(localStorage.getItem(`comments-${productId}`)) || [];
  comments.push(comment);
  localStorage.setItem(`comments-${productId}`, JSON.stringify(comments));
}

// Handle comment form submission
commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = commentInput.value.trim();
  if (!comment) return;

  saveComment(productId, comment);
  loadComments(productId);
  commentInput.value = "";
});

// Initialize comments after loading product details
loadComments(productId);