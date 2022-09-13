function bienvenida(){
    alert("Bienvenido a su Perfumeria")
}

function verProductos(){
    let perfumeId;

    do {
        perfumeId = prompt("Que perfume quisiera comprar? :\n\n1) Dolce & Gabbana Women \n\n2) Giorgio Armani Woman \n\n3) Paco Rabanne Women \n\n4) Prada Women \n\n5) Gucci Woman")
    } while (perfumeId !=1 && perfumeId!=2 && perfumeId !=3 && perfumeId !=4 && perfumeId!=5);

    switch(perfumeId){
        case "1":
            return "Dolce & Gabbana Women";
        case "2":
            return "Giorgio Armani Woman";
        case "3":
            return "Paco Rabanne Women";
        case "4":
            return "Prada Women";
        case "5":
            return "Gucci Woman"
    }
               
}

function ventaPerfume(nombreProducto){
    if(nombreProducto === "Dolce & Gabbana Women"){
        return 5000;
    }else if(nombreProducto === "Giorgio Armani Women"){
        return 6000;
    }else if(nombreProducto === "Paco Rabanne Women"){
        return 6500;
    }else if (nombreProducto === "Prada Women"){
        return 3000;
    }else if(nombreProducto ==="Gucci Woman"){
        return 3500;
    } 

}

function compraPerfume(nombreProducto,precioPerfume){
    alert ("Su compra es: " +nombreProducto +"\n Valor: $"+precioPerfume);
    let pagar= Number(prompt("Con cuanto paga?"))
    if (precioPerfume < pagar) {
        alert("Su vuelto es: $" +(pagar- precioPerfume)+ "\nGracias por su compra")        
    }else if(precioPerfume === pagar){
        alert("Esta justo \nGracias por su compra")
    }else if(precioPerfume > pagar){
        do{
            
            alert("Le falta abonar: $" + (precioPerfume - pagar))
        }
        while(precioPerfume - pagar)}
}
    


bienvenida();
let nombreProducto = verProductos();
let precioPerfume = ventaPerfume(nombreProducto);
compraPerfume(nombreProducto,precioPerfume);