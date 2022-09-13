function saludar(){
    alert("Hola bienvenido a Blockbuster");
    let nombre = prompt("Ingrese su nombre");
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre");
    }
}

function mostrarPeliculas(){
    let peliculaId;

    do{
        peliculaId = prompt("Que pelicula quiere alquilar? : \n1)The Batman\n2)Spiderman\n3)La llamada")
    }while(peliculaId != 1 && peliculaId !=2 && peliculaId !=3)
   

    switch(peliculaId){
        case "1":
            return "batman";
        case "2":
            return "spiderman";
        case "3":
            return "la llamada"
    }
}

function validarPrecio(nombre) {
    if(nombre === "batman"){
        return 500;
    }else if(nombre === "spiderman"){
        return 400;
    }else if(nombre === "la llamada"){
        return 900
    }
}


saludar();
let nombrePelicula =  mostrarPeliculas();
let precioPelicula = validarPrecio(nombrePelicula);
cobrarAlquiler(nombrePelicula,precioPelicula);