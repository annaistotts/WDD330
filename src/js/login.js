import { loadHeaderFooter } from "./utils.mjs";
import { getParams } from "./utils.mjs";
import { login } from "./auth.mjs";

loadHeaderFooter();

const redirect = getParams("redirect");

document.querySelector("#login-Button").addEventListener("click", () => {
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  login((email, password), redirect);
});
