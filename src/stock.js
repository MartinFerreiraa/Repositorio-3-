const productos = [
    {
        id: 1,
        nombre: "Dolce & Gabbana The One",
        categoria: "Hombre",        
        precio: 5000,
        img: "https://d22fxaf9t8d39k.cloudfront.net/39a6d2eebaac7d3ec2db254fbbb32c3d672b13d624f1cc03df7e4bc3f9d9646d74448.png",
        cantidad: 1,
        stock: 10,
        detalle: "Dolce & Gabbana the one for men eau de parfum es un sello oriental masculino que ofrece una experiencia olfativa más intensa dedicada a los expertos en perfumes. Esta fragancia de gran intensidad, masculina y magnética, Es una declaración de carisma y sofisticación. Las notas de salida vibrantes y elegantes de pomelo, cilantro y albahaca revelan el sello especiado oriental de la fragancia. Las notas cálidas y especiadas de jengibre y cardamomo se asocian con la dulzura encantadora de la flor de azahar, de una masculinidad cautivadora. La base de tabaco rica e intensa, con sensuales notas ambarinas y cálidos acentos de cedro, produce una impresión intensa y duradera."
    },
    {
        id: 2,
        nombre: "Dolce & Gabbana The One",
        categoria: "Mujer",        
        precio: 6000,
        img: "https://www.perfumeriavip.com/21245-large_default/dg-the-one-edp-vapo30ml.jpg",
        cantidad: 1,
        stock: 8,
        detalle:"Dolce & Gabbana the one eau de perfum, una fragancia encantadora, sensual y femenina con un nuevo toque de frescor que acentúa la nota clave de azucena. Más vivo y vibrante que nunca, el aroma de la flor fue capturado con todos sus matices por el perfumista michel girard para crear una nueva adicción floral y exaltar su sensualidad. Los pétalos blancos de azucena se encuentran con flores de bergamota italiana y esencias de mandarina, lichi sedoso y melocotón blanco delicioso. En corazón una esencia de ylang moheli exclusiva sublimada por absolutos de flor de naranjo tierna y retama melosa. Un fondo sensual de vainilla, vetiver y almizcle envuelve este ramo exuberante con una estela sensual."
    },
    {
        id: 3,
        nombre: "Armani Code",
        categoria: "Hombre",        
        precio: 5400,
        img: "https://cdn.shopify.com/s/files/1/2390/0819/products/ACH_Profumo_110ml_L7947100_3614270581670_RVB_580x.png?v=1630616727",
        cantidad: 1,
        stock: 9,
        detalle:"Armani Code Profumo de Giorgio Armani es una fragancia de la familia olfativa Ámbar Especiada para Hombres. Armani Code Profumo se lanzó en 2016. La Nariz detrás de esta fragrancia es Antoine Maisondieu. Las Notas de Salida son cardamomo, manzana verde y mandarina verde; las Notas de Corazón son nuez moscada, lavanda y flor de azahar del naranjo; las Notas de Fondo son haba tonka, ámbar y cuero."
    },
    {
        id: 4,
        nombre: "Armani Code",
        categoria: "Mujer",       
        precio: 3900,
        img: "https://media.ulta.com/i/ulta/2127357cm_alt01?w=659&h=659",
        cantidad: 1,
        stock: 5,
        detalle:"Armani Code for Women de Giorgio Armani es una fragancia de la familia olfativa Floral para Mujeres. Armani Code for Women se lanzó en 2006. Armani Code for Women fue creada por Carlos Benaim, Dominique Ropion y Olivier Polge. Las Notas de Salida son naranja italiana, jazmín y naranja amarga; las Notas de Corazón son jazmín, flor de azahar del naranjo y jengibre; las Notas de Fondo son miel, vainilla y sándalo"
    },
    {
        id: 5,
        nombre: "Versace Eros",
        categoria: "Hombre",        
        precio: 7000,
        img: "https://www.rp-luxury.com/9788-medium_default/versace-eros-eau-de-parfum.jpg",
        cantidad: 1,
        stock: 10,
        detalle:"Eros de Versace es una fragancia de la familia olfativa Aromática Fougère para Hombres. Eros se lanzó en 2012. La Nariz detrás de esta fragrancia es Aurelien Guichard. Las Notas de Salida son menta, manzana verde y limón (lima ácida); las Notas de Corazón son haba tonka, ambroxan y geranio; las Notas de Fondo son vainilla de Madagascar, cedro de Virginia, cedro del Atlas, vetiver y musgo de roble."
    },
    {
        id: 6,
        nombre: "Versace Dylan Blue",
        categoria: "Mujer",        
        precio: 6530,
        img: "https://cdnx.jumpseller.com/perfume-center-de-mexico/image/7562281/resize/570/765?1580067737",
        cantidad: 1,
        stock: 7,
        detalle:"Versace Pour Femme Dylan Blue de Versace es una fragancia de la familia olfativa Floral Frutal para Mujeres. Versace Pour Femme Dylan Blue se lanzó en 2017. Versace Pour Femme Dylan Blue fue creada por Calice Becker y Natalie Gracia-Cetto. Las Notas de Salida son manzana Granny Smith, grosellas negras, trébol blanco, nomeolvides y shiso (menta púrpura); las Notas de Corazón son durazno (melocotón), petalia, rosa silvestre (rosa de perro), rosa y jazmín; las Notas de Fondo son almizcle, maderas blancas, styrax y pachulí."
    },
    {
        id: 7,
        nombre: "Christian Dior Sauvage",
        categoria: "Hombre",        
        precio: 9000,
        img:"https://www.rp-luxury.com/3276-thickbox_default/christian-dior-sauvage-eau-de-parfum.jpg",
        cantidad:1,
        stock: 3,
        detalle:"Una nueva interpretación altamente concentrada de Sauvage, donde la frescura extrema se tiñe de cálidos tonos orientales y cuya belleza salvaje quiere cobrar vida sobre la piel.François Demachy, Perfumista-Creador Dior, se inspiró en la inmensidad de un paraje virgen bajo una noche azulada, cuando se perciben los olores intensos de un fuego crepitante.El perfume de una nueva frontera: una variación con una fragancia rica y embriagadora que celebra la magia de los grandes espacios."
    },
    {
        id: 8,
        nombre: "Giorgio Armani Si Passione",
        categoria: "Mujer",        
        precio: 5250,
        img:"https://bigfivedutyfree.co.za/wp-content/uploads/2020/10/Armani-Si-Passione-EDPS-100ml.png",
        cantida: 1,
        stock:8,
        detalle:"Sì Passione de Giorgio Armani es una fragancia de la familia olfativa Floral Frutal para Mujeres. Sì Passione se lanzó en 2017. Sì Passione fue creada por Christine Nagel y Julie Masse. Las Notas de Salida son pera, grosellas negras, pimienta rosa y toronja (pomelo); las Notas de Corazón son piña, rosa, jazmín y heliotropo; las Notas de Fondo son vainilla, cedro, Amberwood y pachulí."
    },
    {
        id: 9,
        nombre: "Moschino Toy Boy",
        categoria: "Hombre",        
        precio: 6900,
        img:"https://todoaplazo.com/images/products/6accad12-b81a-4bf2-ab90-69f7b30f9309-PERFUMEH-185.png",
        cantida: 1,
        stock: 4,
        detalle:"Toy Boy de Moschino es una fragancia de la familia olfativa Amaderada Especiada para Hombres. Toy Boy se lanzó en 2019. La Nariz detrás de esta fragrancia es Yann Vasnier. Las Notas de Salida son pimienta rosa, pera, nuez moscada de Indonesia, elemí y bergamota; las Notas de Corazón son rosa, magnolia, clavo de olor y lino; las Notas de Fondo son cachemira, Sylkolide, vetiver de Haití, sándalo y ámbar."
    }


]
export {productos};