const obtenerProductos = async () => {
    try {
        const resp = await fetch ('./src/data/stock.json');
        const data = await resp.json();
        return data;
        
    } catch (error) {
        console.log(error)
        
    }
   
 };
 export {obtenerProductos};