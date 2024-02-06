
const cartIcon = document.getElementById('profile__cart');
const cartModal = document.getElementById('cart');

cartIcon.addEventListener('click', function(event) {
    event.preventDefault();

    // Verifica si el modal está visible
    const isModalVisible = window.getComputedStyle(cartModal).display !== 'none';

    // Muestra u oculta el modal
    cartModal.style.display = isModalVisible ? 'none' : 'block';
});
















