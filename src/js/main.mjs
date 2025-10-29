import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

async function init() {
    await loadHeaderFooter();
    // product listing moved to its own page (src/product-list/index.html)
}

init();


// First-time visitor modal
const modal = document.getElementById('signupModal');
const closeBtn = modal.querySelector('.close');

if (!localStorage.getItem('visited')) {
    modal.style.display = 'block';
    localStorage.setItem('visited', 'true');
}

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Optional: Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
