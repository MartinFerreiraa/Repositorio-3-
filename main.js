
// function verProductos(){
//     let perfumeId;

//     do {
//         perfumeId = prompt("Que perfume quisiera comprar? :\n\n1) Dolce & Gabbana Women \n\n2) Giorgio Armani Woman \n\n3) Paco Rabanne Women \n\n4) Prada Women \n\n5) Gucci Woman")
//     } while (perfumeId !=1 && perfumeId!=2 && perfumeId !=3 && perfumeId !=4 && perfumeId!=5);

//     switch(perfumeId){
//         case "1":
//             return "Dolce & Gabbana Women";
//         case "2":
//             return "Giorgio Armani Woman";
//         case "3":
//             return "Paco Rabanne Women";
//         case "4":
//             return "Prada Women";
//         case "5":
//             return "Gucci Woman"
//     }

// }

// function ventaPerfume(nombreProducto){
//     if(nombreProducto === "Dolce & Gabbana Women"){
//         return 5000;
//     }else if(nombreProducto === "Giorgio Armani Women"){
//         return 6000;
//     }else if(nombreProducto === "Paco Rabanne Women"){
//         return 6500;
//     }else if (nombreProducto === "Prada Women"){
//         return 3000;
//     }else if(nombreProducto ==="Gucci Woman"){
//         return 3500;
//     } 

// }

// function compraPerfume(nombreProducto,precioPerfume){
//     alert ("Su compra es: " +nombreProducto +"\n Valor: $"+precioPerfume);
//     let pagar= Number(prompt("Con cuanto paga?"))
//     if (precioPerfume < pagar) {
//         alert("Su vuelto es: $" +(pagar- precioPerfume)+ "\nGracias por su compra")        
//     }else if(precioPerfume === pagar){
//         alert("Esta justo \nGracias por su compra")
//     }else if(precioPerfume > pagar){
//         do{

//             alert("Le falta abonar: $" + (precioPerfume - pagar))
//         }
//         while(precioPerfume - pagar)}
// }




// let nombreProducto = verProductos();
// let precioPerfume = ventaPerfume(nombreProducto);
// compraPerfume(nombreProducto,precioPerfume);




function bienvenida() {
    alert("Bienvenido a su Perfumeria")
}

class Producto {
    constructor(id, nombre, categoria, precio) {
        this.id = Number(id),
            this.nombre = nombre,
            this.categoria = categoria,
            this.precio = Number(precio)
    }

}

const arrayProducto = [];
const producto1 = new Producto(1, "Dolce & Gabbana", "Masculino", 5000);
const producto2 = new Producto(2, "Giorgio Armani", "Femenino", 6000);
const producto3 = new Producto(3, "Paco Rabanne", "Masculino", 6500);
const producto4 = new Producto(4, "Prada", "Femenino", 3000);
const producto5 = new Producto(5, "Gucci", "Masculino", 3500);

arrayProducto.push(producto1, producto2, producto3, producto4, producto5);

const verPerfumes = () => {
    let opcion;
    do {
        opcion = prompt("Que perfume desearia ver: \n\na) Masculinos \n\nb) Femeninos \n\nc) Todos");
        if (opcion === "a") {

            elegirMasculino();
            // agregarCompra();


        } else if (opcion === "b") {

            elegirFemenino();
            // agregarCompra();

        } else if (opcion === "c") {

            elegirTodos();
            // agregarCompra();
        }
    } while ("") {

    };
};

arrayElegido = [];
const elegirMasculino = () => {
    const masculino = arrayProducto.filter(producto => producto.categoria === "Masculino")
    masculino.forEach(producto => arrayElegido.push(producto.id + ")" + " , " + producto.nombre + " , " + producto.categoria + " , " + "$" + producto.precio + "\n\n"));
    console.log(arrayElegido);
    alert(arrayElegido);
};

const elegirFemenino = () => {
    const femenino = arrayProducto.filter(producto => producto.categoria === "Femenino")
    femenino.forEach(producto => arrayElegido.push(producto.id + ")" + " , " + producto.nombre + " , " + producto.categoria + " , " + "$" + producto.precio + "\n\n"));
    console.log(arrayElegido);
    alert(arrayElegido);
};

const elegirTodos = () => {
    arrayProducto.forEach(producto => arrayElegido.push(producto.id + ")" + " , " + producto.nombre + " , " + producto.categoria + " , " + "$" + producto.precio + "\n\n"))
    console.log(arrayElegido);
    alert(arrayElegido);
};



bienvenida();
verPerfumes();



