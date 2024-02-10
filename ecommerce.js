
const cartIcon = document.getElementById('profile__cart');
const cartModal = document.getElementById('cart');

//MODAL
cartIcon.addEventListener('click', function(event) {
    event.preventDefault();

    // Verifica si el modal está visible
    const isModalVisible = window.getComputedStyle(cartModal).display !== 'none';

    // Muestra u oculta el modal
    cartModal.style.display = isModalVisible ? 'none' : 'block';
});



//nabvar desplegable
const items = document.getElementById('items')
const openBtn = document.getElementById('button-open')
const closeBtn = document.getElementById('button-close')


openBtn.addEventListener('click', function() {
    items.classList.add('items--visible')
})
closeBtn.addEventListener('click', function() {
    items.classList.remove('items--visible')
})



//contador
let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            if(count > 0) {
                count--;
                value.textContent = count;
            }
        } else if (styles.contains('increase')) {
            count++;
            value.textContent = count;
        }
        value.textContent = count;
    })
})



