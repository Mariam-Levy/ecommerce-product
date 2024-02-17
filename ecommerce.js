
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

/* let quantity = 0;
    const pricePerItem = 125.00; // Precio fijo de los zapatos

    function increaseQuantity() {
        quantity++;
        document.getElementById('value').innerText = quantity;
        updateAmountAndTotal();
    }

    function decreaseQuantity() {
        if (quantity > 0) {
            quantity--;
            document.getElementById('value').innerText = quantity;
            updateAmountAndTotal();
        }
    }

    function addToCart() {
        const currentQuantity = parseInt(document.getElementById('value').innerText);
        const totalQuantity = parseInt(document.getElementById('cantidadCarrito').innerText);
        const newTotal = currentQuantity + totalQuantity;
        document.getElementById('cantidadCarrito').innerText = newTotal;
        updateAmountAndTotal(); // Actualizamos aquí también
        quantity = 0;
        document.getElementById('value').innerText = quantity;
    }

    function updateAmountAndTotal() {
        const currentQuantity = parseInt(document.getElementById('value').innerText);
        const totalPrice = currentQuantity * pricePerItem; // Aquí corregimos el cálculo
        document.getElementById('amount').innerText = currentQuantity;
        document.getElementById('totalPrice').innerText = '$' + totalPrice.toFixed(2);
    } */


    let quantity = 0;
    const pricePerItem = 125.00; // Precio fijo de los zapatos

    function increaseQuantity() {
        quantity++;
        document.getElementById('value').innerText = quantity;
        updateAmountAndTotal();
    }

    function decreaseQuantity() {
        if (quantity > 0) {
            quantity--;
            document.getElementById('value').innerText = quantity;
            updateAmountAndTotal();
        }
    }

    function addToCart() {
        const currentQuantity = parseInt(document.getElementById('value').innerText);
        const totalQuantity = parseInt(document.getElementById('cantidadCarrito').innerText);
        const newTotal = currentQuantity + totalQuantity;
        document.getElementById('cantidadCarrito').innerText = newTotal;
        updateAmountAndTotal(); // Actualizamos aquí también
        quantity = 0;
        document.getElementById('value').innerText = quantity;
    }

    function updateAmountAndTotal() {
        const currentQuantity = parseInt(document.getElementById('value').innerText);
        const totalPrice = currentQuantity * pricePerItem; // Aquí corregimos el cálculo
        document.getElementById('amount').innerText = currentQuantity;
        document.getElementById('totalPrice').innerText = '$' + totalPrice.toFixed(2);
    }

    function resetValues() {
        quantity = 0;
        document.getElementById('value').innerText = quantity;
        document.getElementById('amount').innerText = quantity;
        document.getElementById('cantidadCarrito').innerText = 0;
        document.getElementById('totalPrice').innerText = '$0.00';
    }



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




