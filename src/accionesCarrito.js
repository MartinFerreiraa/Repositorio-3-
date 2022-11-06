import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { obtenerProductos } from './obtenerProductos.js';
import { obtenerCarritoStorage } from './storage.js';


let carrito = [];


const finalizarCompra = document.getElementById("finalizar");
finalizarCompra.addEventListener("click",()=>{ 
    window.location.href = "./formulario.html";
});

const validarProductoRepetido = (productoId) => {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = async (productoId) => {
    const productos = await obtenerProductos();  
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);

    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>                    
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class=' boton-eliminar'> X </button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');        
        div.innerHTML = `<p>${producto.nombre}</p>                        
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class=' boton-eliminar'> X </button>
                        `;
        contenedor.appendChild(div);
        
    });
    
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);
    Swal.fire({
        title: 'Está seguro?',
        text: 'Va a eliminar el producto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#00ff00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            actualizarTotalesCarrito(carritoActualizado);
            pintarCarrito(carritoActualizado);
            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado correctamente.',
                'success'
            )
        }
    })
};



export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito, finalizarCompra };


