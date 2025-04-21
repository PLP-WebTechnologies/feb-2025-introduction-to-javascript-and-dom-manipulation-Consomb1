// Function to update price text dynamically
function updatePrice() {
    const priceElement = document.getElementById('priceText');
    const newPrice = (Math.random() * 3 + 2).toFixed(2); // Random price between $2.00 and $5.00
    priceElement.textContent = `Price: $${newPrice} per pound`;
}

// Function to modify CSS styles
function changeDisplay() {
    const productSection = document.querySelector('.product');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    productSection.style.backgroundColor = randomColor;
    productSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    productSection.style.transition = 'all 0.3s ease';
}

// Function to add or remove review section
function toggleReview() {
    const reviewSection = document.getElementById('reviewSection');
    
    if (reviewSection) {
        // If review exists, remove it
        reviewSection.remove();
    } else {
        // If review doesn't exist, create and add it
        const newReview = document.createElement('article');
        newReview.id = 'reviewSection';
        newReview.className = 'review';
        newReview.innerHTML = '<p>Customer Review: Amazing quality potatoes, highly recommend!</p>';
        document.querySelector('.product').appendChild(newReview);
    }
}