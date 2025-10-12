import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

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

function renderProductDetails(product) {
    document.querySelector("title").innerText = `Sleep Outside | ${product.Name}`
    document.querySelector("#productName").innerText = product.Name;
    document.querySelector("#productNameWithoutBrand").innerText = product.NameWithoutBrand;
    document.querySelector("#productImage").src = product.Image;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productFinalPrice").innerText = product.FinalPrice;
    document.querySelector("#productColorName").innerText = product.Colors[0].ColorName;
    document.querySelector("#productDescriptionHtmlSimple").innerHTML = product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').dataset.id = product.Id
}