import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

async function init() {
    await loadHeaderFooter();
    productList(".product-list", "tents");
}

init();
