const baseURL = import.meta.env.VITE_SERVER_URL;
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: 'servicesError', message: jsonResponse };
  }
}

export async function getProductsByCategory(category) {
  const url = new URL(`products/search/${category}`, baseURL);
  const response = await fetch(url);
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
  const url = new URL(`product/${id}`, baseURL);
  const response = await fetch(url);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(payload) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const url = new URL("checkout/", baseURL);
  return await fetch(url, options).then(convertToJson);
}