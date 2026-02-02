document.addEventListener('DOMContentLoaded', () => {
    // 1. Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productCards = document.querySelectorAll('.product-card');

    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
        if (searchInput.value === '') {
            productCards.forEach(card => card.style.display = 'block');
        }
    });

    // 2. Cart Functionality
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.innerText = cartCount;
            
            // Visual feedback
            const originalText = button.innerText;
            button.innerText = 'Added!';
            button.style.backgroundColor = '#ff0000';
            button.style.color = 'white';
            
            setTimeout(() => {
                button.innerText = originalText;
                button.style.backgroundColor = 'transparent';
                button.style.color = '#ff0000';
            }, 1000);
        });
    });

    // 3. Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // 4. Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // 5. Mobile Menu Toggle (Basic)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        if (navLinksList.style.display === 'flex') {
            navLinksList.style.display = 'none';
        } else {
            navLinksList.style.display = 'flex';
            navLinksList.style.flexDirection = 'column';
            navLinksList.style.position = 'absolute';
            navLinksList.style.top = '70px';
            navLinksList.style.left = '0';
            navLinksList.style.width = '100%';
            navLinksList.style.backgroundColor = 'rgba(15, 15, 15, 0.95)';
            navLinksList.style.padding = '20px';
            navLinksList.style.textAlign = 'center';
        }
    });
});
