// script.js

document.addEventListener('DOMContentLoaded', function () {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const navigation = document.getElementById('navigationBar');
    const newsletterSection = document.getElementById('newsletter');

    if (bar && navigation) {
        bar.addEventListener('click', () => {
            navigation.classList.add('active');
        });
    }

    if (close && navigation) {
        close.addEventListener('click', () => {
            navigation.classList.remove('active');
        });
    }

    // Toggle newsletter section visibility
    if (newsletterSection) {
        const newsletterButton = document.getElementById('newsletterButton');

        if (newsletterButton) {
            newsletterButton.addEventListener('click', () => {
                newsletterSection.classList.toggle('active');
            });
        }
    }
});

// Add event listeners for quantity input changes
document.querySelectorAll('#cart tbody tr input[type="number"]').forEach(input => {
    const priceCell = input.closest('tr').cells[3]; // Price column
    const totalCell = input.closest('tr').cells[5]; // Subtotal column

    input.addEventListener('input', () => {
        handleQuantityChange(input, priceCell, totalCell);
    });
});

// Event listeners for "Remove" button
document.querySelectorAll('.remove-item').forEach((removeButton, index) => {
    removeButton.addEventListener('click', () => {
        removeFromCart(index);
    });
});


// Function to handle quantity change
function handleQuantityChange(input, priceCell, totalCell) {
const quantity = parseInt(input.value);
const price = parseFloat(priceCell.textContent.replace('$', ''));

// Update subtotal for a single product
const subtotal = quantity * price;
totalCell.textContent = `$${subtotal.toFixed(2)}`;

// Update the total for all products
updateCartTotal();
}

// Function to update the cart total
function updateCartTotal() {
    let subtotal = 0;

    // Loop through each product row
    document.querySelectorAll('#cart tbody tr').forEach(row => {
        const subtotalCell = row.cells[5]; // Subtotal column
        subtotal += parseFloat(subtotalCell.textContent.replace('$', ''));
    });

    // Update the subtotal in the HTML
    const subtotalElement = document.querySelector('#subtotal table td:nth-child(2)');
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

    // Shipping is $7.99
    const shipping = 7.99;

    // Calculate the total
    const total = subtotal + shipping;

    // Update the total in the HTML
    const totalElement = document.querySelector('#cart-total tbody tr:last-child td:last-child');
    totalElement.textContent = `$${total.toFixed(2)}`;
}
// Function to remove an item from the cart
function removeFromCart(index) {
    // Get the row corresponding to the clicked "Remove" button
    const rowToRemove = document.querySelectorAll('#cart tbody tr')[index];

    // Remove the row from the table
    rowToRemove.remove();

    // Update the cart total after removing the item
    updateCartTotal();
}

