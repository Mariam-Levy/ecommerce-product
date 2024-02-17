
const cartIcon = document.getElementById('profile__cart');
const cartModal = document.getElementById('cart');

//MODAL del carrito de compras
cartIcon.addEventListener('click', function(event) {
    event.preventDefault();

    // Verifica si el modal está visible
    const isModalVisible = window.getComputedStyle(cartModal).display !== 'none';

    // Muestra u oculta el modal
    cartModal.style.display = isModalVisible ? 'none' : 'block';
});










// ------ nabvar desplegable -------
const items = document.getElementById('items')
const openBtn = document.getElementById('button-open')
const closeBtn = document.getElementById('button-close')

openBtn.addEventListener('click', function() {
    items.classList.add('items--visible')
})
closeBtn.addEventListener('click', function() {
    items.classList.remove('items--visible')
});



// ----- contador ------- 
let quantity = 0;

function increaseQuantity() {
    quantity++;
    document.getElementById('value').innerText = quantity;
}

function decreaseQuantity() {
    if (quantity > 0) {
        quantity--;
        document.getElementById('value').innerText = quantity;
    }
}

function addToCart() {
    const currentQuantity = parseInt(document.getElementById('value').innerText);
    const totalQuantity = parseInt(document.getElementById('cantidadCarrito').innerText);
    const newTotal = currentQuantity + totalQuantity;
    document.getElementById('cantidadCarrito').innerText = newTotal;
    
    quantity = 0;
    document.getElementById('value').innerText = quantity;
}

/* let count = 0;
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
}); */


// ------ Redirige al segundo archivo HTML ----
document.getElementById('imagen').addEventListener('click', function() {
  window.location.href = 'slider.html'; 
});



// cambio de imagenes pequeñas a grandes
function cambiarImagen(elemento, nuevaImagen) {
  let imagenPrincipal = document.getElementById('imagen-principal');
  imagenPrincipal.src = nuevaImagen;

  const imagenesPequenas = document.querySelectorAll('.imagen-pequena');
  imagenesPequenas.forEach(function(img) {
    img.classList.remove('imagen-pequena--seleccionada')
  });

  elemento.classList.add('imagen-pequena--seleccionada')
}




