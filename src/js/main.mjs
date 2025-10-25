import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

async function init() {
    await loadHeaderFooter();
    // product listing moved to its own page (src/product-list/index.html)
}

init();
