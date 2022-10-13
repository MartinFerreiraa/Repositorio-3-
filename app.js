import { validarProductoRepetido } from "./src/accionesCarrito.js";



const mostrarProductos = (productos) => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-content">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <p>${producto.categoria}</p>
                        <a class="btn btn-success" id=boton${producto.detalle}>Detalles</a>
                        <p>Precio: $ ${producto.precio}</p>
                        <a class=" btn btn-warning" id=boton${producto.id}>Comprar</a>
                        `
                                             
                        
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
      Toastify({   
                position : "center",                                          
                text: 'Producto agregado al carrito',
                duration: 1700,
                style: {                   
                  background: "#a8a500"                  
                }
            }).showToast();
    })
    
  });
  
};

export { mostrarProductos };

