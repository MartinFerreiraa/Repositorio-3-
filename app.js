import { validarProductoRepetido } from "./src/accionesCarrito.js";

const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-content">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <p>Precio: $ ${producto.precio}</p>
                        <a class=" btn btn-warning" id=boton${producto.id}>Comprar</a>
                        <p>Stock:${producto.stock}</p>`
                                             
                        
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
    })
  });
};

export { mostrarProductos };
