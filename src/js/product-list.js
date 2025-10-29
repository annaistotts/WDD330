import productList from "./productList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

async function init() {
  await loadHeaderFooter();
  const category = getParams("category") || "tents";
  // update title
  const titleEl = document.querySelector("#listTitle");
  if (titleEl) {
    // capitalise and make friendly
    const pretty = category
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    titleEl.textContent = `Top Products: ${pretty}`;
  }
  productList(".product-list", category);
}

init();
