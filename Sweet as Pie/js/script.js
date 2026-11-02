
// SWEET AS PIE - WEBSITE FUNCTIONALITY

// PRODUCT INFORMATION
const PRODUCTS = {
    apple: {
        name: 'Apple Pie',
        price: 220,
        image: 'https://www.sweetaspie.co.za/cdn/shop/files/Apple_Pie.jpg?v=1763087026&width=1946'
    },
    blueberry: {
        name: 'Blueberry Pie',
        price: 220,
        image: 'https://www.sweetaspie.co.za/cdn/shop/files/Sharing_Blueberry_Pie.jpg?v=1763087005&width=1946'
    },
    cherry: {
        name: 'Cherry Pie',
        price: 220,
        image: 'https://www.sweetaspie.co.za/cdn/shop/files/Cherry_Pie.jpg?v=1763087017&width=1946'
    }
};

// SHOPPING CART
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('sweetAsPieCart')) || {};
    } catch (error) {
        return {};
    }
}

function saveCart(cart) {
    localStorage.setItem('sweetAsPieCart', JSON.stringify(cart));
}

function money(amount) {
    return `R${Number(amount).toFixed(2)}`;
}

function addToCart(key) {
    if (!PRODUCTS[key]) return;

    const cart = getCart();
    cart[key] = (cart[key] || 0) + 1;

    saveCart(cart);
    window.location.href = 'checkout.html';
}

// ADD PRODUCT BUTTONS
document.querySelectorAll('[data-add-product]').forEach(button => {
    button.addEventListener('click', () => {
        addToCart(button.dataset.addProduct);
    });
});

// CHECKOUT DISPLAY
function renderCheckout() {
    const list = document.querySelector('#cartItems');

    if (!list) return;

    const cart = getCart();
    list.innerHTML = '';

    let subtotal = 0;

    Object.entries(cart).forEach(([key, quantity]) => {
        const product = PRODUCTS[key];

        if (!product || quantity < 1) return;

        subtotal += product.price * quantity;

        const row = document.createElement('div');
        row.className = 'cart-line';

        row.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <strong>${product.name}</strong><br>
                <span>${money(product.price)} each</span>
            </div>
            <div class="qty-control">
                <button type="button" data-change="${key}" data-delta="-1"
                aria-label="Decrease ${product.name} quantity">−</button>
                <strong>${quantity}</strong>
                <button type="button" data-change="${key}" data-delta="1"
                aria-label="Increase ${product.name} quantity">+</button>
            </div>
        `;

        list.appendChild(row);
    });

    if (subtotal === 0) {
        list.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="products.html">Choose a pie</a> to begin.</p>';
    }

    const subtotalElement = document.querySelector('#subtotal');
    const totalElement = document.querySelector('#total');

    if (subtotalElement) subtotalElement.textContent = money(subtotal);
    if (totalElement) totalElement.textContent = money(subtotal);

    document.querySelectorAll('[data-change]').forEach(button => {
        button.addEventListener('click', () => {
            const updatedCart = getCart();
            const key = button.dataset.change;

            updatedCart[key] = Math.max(
                0,
                (updatedCart[key] || 0) + Number(button.dataset.delta)
            );

            if (updatedCart[key] === 0) {
                delete updatedCart[key];
            }

            saveCart(updatedCart);
            renderCheckout();
        });
    });
}

renderCheckout();

// DELIVERY AND COLLECTION
const delivery = document.querySelector('#delivery');
const collection = document.querySelector('#collection');
const address = document.querySelector('#address');

function toggleAddress() {
    if (!address) return;

    const required = delivery?.checked;

    address.disabled = !required;
    address.required = !!required;

    address.placeholder = required
        ? 'Enter your delivery address'
        : 'Not required for collection';
}

delivery?.addEventListener('change', toggleAddress);
collection?.addEventListener('change', toggleAddress);

toggleAddress();

// CHECKOUT FORM
const checkoutForm = document.querySelector('#checkoutForm');

checkoutForm?.addEventListener('submit', event => {
    event.preventDefault();

    const cart = getCart();

    if (Object.keys(cart).length === 0) {
        document.querySelector('#checkoutStatus').textContent =
            'Please add at least one product before placing your order.';
        return;
    }

    if (!checkoutForm.reportValidity()) return;

    document.querySelector('#checkoutStatus').textContent =
        'Order details captured successfully for this website prototype. Thank you!';

    saveCart({});
    renderCheckout();
    checkoutForm.reset();
    toggleAddress();
});

// PRODUCT SEARCH
const productSearch = document.querySelector('#productSearch');
const searchMessage = document.querySelector('#searchMessage');

if (productSearch) {
    productSearch.addEventListener('input', function () {
        const searchValue = productSearch.value.toLowerCase().trim();
        const products = document.querySelectorAll('.product-card');

        let visibleProducts = 0;

        products.forEach(product => {
            const heading = product.querySelector('h2');
            const description = product.querySelector('p');

            const productName = heading
                ? heading.textContent.toLowerCase()
                : '';

            const productDescription = description
                ? description.textContent.toLowerCase()
                : '';

            if (
                productName.includes(searchValue) ||
                productDescription.includes(searchValue)
            ) {
                product.style.display = '';
                visibleProducts++;
            } else {
                product.style.display = 'none';
            }
        });

        if (searchMessage) {
            searchMessage.textContent = visibleProducts === 0
                ? 'No products found. Please try another search.'
                : visibleProducts + ' product(s) found.';
        }
    });
}

// PRODUCT IMAGE LIGHTBOX
const galleryImages = document.querySelectorAll('.gallery-image');
const imageLightbox = document.querySelector('#imageLightbox');
const lightboxImage = document.querySelector('#lightboxImage');
const closeLightbox = document.querySelector('#closeLightbox');

galleryImages.forEach(image => {
    image.style.cursor = 'pointer';

    image.addEventListener('click', () => {
        if (!imageLightbox || !lightboxImage) return;

        imageLightbox.style.display = 'flex';
        imageLightbox.setAttribute('aria-hidden', 'false');

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
    });
});

function closeImageLightbox() {
    if (!imageLightbox || !lightboxImage) return;

    imageLightbox.style.display = 'none';
    imageLightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
}

closeLightbox?.addEventListener('click', closeImageLightbox);

imageLightbox?.addEventListener('click', event => {
    if (event.target === imageLightbox) {
        closeImageLightbox();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeImageLightbox();
    }
});

// FORM VALIDATION - ENQUIRY AND CONTACT FORMS
document.querySelectorAll('form[data-demo-form]').forEach(form => {

    const email = form.querySelector('input[type="email"]');

    // Apply email validation while typing
    if (email) {
        email.addEventListener('input', () => {
            email.setCustomValidity('');

            const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

            if (email.value && !emailPattern.test(email.value)) {
                email.setCustomValidity(
                    'Please enter a valid email address, for example name@gmail.com.'
                );
            }
        });
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        // Check all HTML form requirements
        if (!form.reportValidity()) {
            return;
        }

        // Additional email validation
        if (email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email.value.trim())) {
                email.setCustomValidity(
                    'Please enter a valid email address, for example name@gmail.com.'
                );

                email.reportValidity();
                return;
            }
        }

        // Display confirmation
        const status = form.querySelector('.form-status');

        if (status) {
            status.textContent = form.dataset.success ||
                'Thank you. Your form was submitted successfully.';
        }

        form.reset();
    });
});
