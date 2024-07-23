document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.getAttribute('data-product-name');
            const productPrice = event.target.getAttribute('data-product-price');
            const whatsappNumber = '923323586739';
            const message = `Hello, I am interested in buying the ${productName} priced at ${productPrice}. Is it available?`;
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappLink, '_blank');
        });
    });
});