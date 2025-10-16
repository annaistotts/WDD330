import { getParams } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

// Team Assignment 2
const productId = getParams("product");
productDetails(productId);
