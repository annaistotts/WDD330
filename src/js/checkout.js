import { loadHeaderFooter } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

loadHeaderFooter();
// alertMessage("test");

checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess),
  );

// // listening for click on the button
// document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
//   console.log("test");
//   e.preventDefault();
//   var myForm = document.forms[0];
//   var chk_status = myForm.checkValidity();
//   myForm.reportValidity();
//   if (chk_status)
//     checkoutProcess.checkout();
// });

// Listening for the form submission
document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  checkoutProcess.checkout(e.target);
});
