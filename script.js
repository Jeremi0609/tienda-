

// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("loginBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, también lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}













const contenedorProductos = document.getElementById("productos-container");

// Función para generar las tarjetas de productos
function mostrarProductos() {
    productos.forEach(producto => {
        // Crear la estructura de la tarjeta usando clases de Bootstrap
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("col-md-4", "mb-4");

        tarjeta.innerHTML = `
    <div class="card h-100">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body mt-3 p-3">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text"><strong>Precio:</strong> ${producto.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</p>
            <p class="card-text"><strong>Stock:</strong> ${producto.stock.toLocaleString('es-CO')} unidades</p>
            <p class="card-text"><strong>Categoría:</strong> ${producto.categoria.join(", ")}</p>
            <div class="text-center">
                <a href="#" class="btn btn-primary">Agregar al carrito</a>
            </div>
        </div>
    </div>
`;


        // Agregar la tarjeta al contenedor principal
        contenedorProductos.appendChild(tarjeta);
    });
}

// Llamar la función para mostrar los productos
mostrarProductos();





