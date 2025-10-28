// const baseURL = import.meta.env.VITE_SERVER_URL;

// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }

// export function getProductsByCategory(category = "tents") {
//   return fetch(`../json/${category}.json`)
//     .then(convertToJson)
//     .then((data) => data);
// }
// export async function getData(category = "tents") {
//   const response = await fetch(baseURL + `products/search/${category}`);
//   const data = await convertToJson(response);
//   return data.Result;
// }

// // Step 5: week 7

// export async function findProductById(id) {
//   const products = await getProductsByCategory();
//   return products.find((item) => item.Id === id);

//   const response = await fetch(baseURL + `product/${id}`);
//   const data = await convertToJson(response);
//   return data.Result;
// }
