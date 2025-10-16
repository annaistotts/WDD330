// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
// From Team Assignment 2: Returns URL Parameter
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  //why does 'product' work here and not 'param'?
  const product = urlParams.get('product')  
  return product;
}


// renderList(list, el) {
//     const htmlStrings =  list.map(productCardTemplate);
//     el.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
// }


export function renderListTemplate(templateFn, parentElement, list, position = "afterbegin", clear = true) {
  if (clear) {
    parentElement.innerHTML = "";
  } 
  const htmlString = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlString.join(""));
};


export function getProductPrice(product) {
  return `<del>$${product.SuggestedRetailPrice}</del>
          <span class="product-card__price-off">
              (${Math.floor(((product.SuggestedRetailPrice - product.FinalPrice) / product.SuggestedRetailPrice)*100)}% off)
          </span>
          $${product.FinalPrice}`
}
