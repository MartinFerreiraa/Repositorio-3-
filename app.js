const mostrarProductos = (data) => {
    const contenedorProductos = document.getElementById('producto-contenedor')
    data.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card" style="width: 20rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Categoria: ${producto.categoria}</p>
                                <p class="card-text">Precio: $${producto.precio}</p>
                                <p class="card-text">Stock: ${producto.stock}</p>                                
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id)
            alert(`Se agrego: 
                ${producto.nombre}
                Categoria:  ${producto.categoria}
                Cantidad:  ${producto.cantidad}
                Precio:   $${producto.precio}`)
        })

    })

}

mostrarProductos(data)