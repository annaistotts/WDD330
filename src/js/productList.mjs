import { getData } from "./productData.mjs";
import { renderListTemplate } from "./utils.mjs"

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
        <img
            onerror="missingImage(this)"
            src="${product.Image}"
            alt="Image of ${product.Name}" />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`
};

export default async function productList(selector, category) {    
    const elements = document.querySelector(selector);
    const products = await getData(category);
    renderListTemplate(productCardTemplate, elements, products);
};


