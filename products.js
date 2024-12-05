function openModal(product) {
    const modal = document.getElementById('productModal');
    const productName = document.getElementById('productName');
    const productFlavor = document.getElementById('productFlavor');

    if (product === 'strawberry') {
        productName.textContent = 'Lotus Strawberry';
        productFlavor.textContent = 'With only 70mg of caffeine, all extracted from green tea leaves; this flavor uses real strawberries, coconut water, a hint of lemon, and a touch of natural sweetness from a fruit mix for an organic taste. ';
    } else if (product === 'orange') {
        productName.textContent = 'Lotus Orange';
        productFlavor.textContent = 'With only 70mg of caffeine, all extracted from green tea leaves; this flavor uses real orange juice, nectarine, and a hint of lemon juice for a citrus masterpiece.';
    } else if (product === 'pineapple') {
        productName.textContent = 'Lotus Pineapple';
        productFlavor.textContent = 'With only 70mg of caffeine, all extracted from green tea leaves; this flavor uses real pineapple juice diluted with coconut water and a hint of orange juice for tangy greatness.';
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = "none";
}

function openBuyModal() {
    const buyModal = document.getElementById('buyModal');
    buyModal.style.display = "block";
}

function closeBuyModal() {
    const buyModal = document.getElementById('buyModal');
    buyModal.style.display = "none";
}




window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    const buyModal = document.getElementById('buyModal');
    if (event.target === modal || event.target === buyModal) {
        modal.style.display = "none";
        buyModal.style.display = "none";
    }
}
