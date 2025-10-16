import { getLocalStorage } from "./utils.mjs";

function refreshCartCounter() {
    const disabled = 'cart__counter-disabled'
    if (!document.querySelector('.cart a .cart__counter')) {
        const cart = document.querySelector('.cart')
        cart.insertAdjacentHTML('afterbegin', `<div class="cart__counter cart__counter-disabled"></div>`)
    }

    const counter = document.querySelector('.cart .cart__counter')
    const cartItems = getLocalStorage("so-cart") || [];
    if (cartItems.length) {
        console.log(counter, cartItems.length)
        counter.innerText = cartItems.length
        counter.classList.remove(disabled)
    } else {
        counter.classList.add(disabled)
    }
}
refreshCartCounter()