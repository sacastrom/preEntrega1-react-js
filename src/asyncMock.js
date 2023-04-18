const products = [
    {
        id: "7798253182515",
        img: "../images/palitosPanceta.jpg",
        nombre: "Snack palitos sabor panceta 60 gr",
        fecha: "2023-04-13",
        stock: 10,
        precio: 1500,
        categoria: "golosinas",
        description: "Snack crujiente con sabor a panceta, que pueden ser una opción deliciosa para satisfacer antojos o como acompañamiento de otros alimentos. El paquete contiene 60 gramos de palitos, lo que lo hace ideal para llevar como un snack portátil o para compartir en grupos pequeños. "
    },
    {
        "id": "7798253182516",
        "img": "../images/caramelosBerries.jpg",
        "nombre": "Caramelos Hi-Chew Sabor Mix de frutos rojos",
        "fecha": "2023-05-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Los caramelos Hi-Chew Sabor Mix de frutos rojos son un delicioso snack con sabor a mezcla de frutos rojos. Estos caramelos tienen una textura suave y masticable, y vienen en diferentes sabores de frutos rojos como fresa, frambuesa, arándano y granada. El paquete contiene una cantidad variada de cada sabor, lo que proporciona una experiencia de degustación diversa y emocionante. Los caramelos Hi-Chew son perfectos para un antojo dulce, para compartir con amigos o simplemente para disfrutar en cualquier momento del día. "
    },
    {
        "id": "7798253182517",
        "img": "../images/lataCaramelos.jpg",
        "nombre": "Lata de Caramelos Tumba de Luciérnagas Sakura Drops",
        "fecha": "2023-06-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "La Lata de Caramelos Tumba de Luciérnagas Sakura Drops es un producto de dulces japoneses que contiene caramelos duros con sabor a flor de cerezo. Estos caramelos son populares en Japón y son conocidos por su sabor dulce y suave con un toque floral. La lata contiene una cantidad generosa de caramelos y es ideal para llevar contigo como un snack dulce o para compartir con amigos y familiares."
    },
    {
        "id": "7798253182518",
        "img": "../images/palitosPicantes.jpg",
        "nombre": "Snack palitos picantes 60 gr ",
        "fecha": "2026-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "El Snack palitos picantes de 60 gramos es un producto de snack crujiente con un sabor picante. Estos palitos son una opción deliciosa para aquellos que disfrutan de los sabores picantes y pueden ser una excelente opción para satisfacer antojos o como acompañamiento de otros alimentos. El paquete contiene 60 gramos de palitos, lo que lo hace ideal para llevar como un snack portátil o para compartir en grupos pequeños. "
    },
    {
        "id": "7031146157396",
        "img": "../images/31146157396.jpg",
        "nombre": "Fideos Instantáneos Sabor Miso Picante 125 gr",
        "fecha": "2026-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "Los Fideos Instantáneos Sabor Miso Picante de 125 gramos son un producto de comida rápida que se prepara fácilmente en casa o en el trabajo. Estos fideos tienen un sabor a miso picante y son un plato popular en la cocina asiática. El paquete contiene 125 gramos de fideos secos y una bolsa de condimentos para agregar sabor. Los fideos se cocinan en unos pocos minutos y son perfectos para una comida rápida y deliciosa."
    },
    {
        "id": "7798253182520",
        "img": "../images/4902555175.jpg",
        "nombre": "Galletita Amarilla",
        "fecha": "2023-07-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "La galletita Country Ma'am Mousse es un producto de la popular marca de dulces japonesa Fujiya. Se trata de una galleta suave y esponjosa con sabor a mousse de vainilla. Cada galleta es grande y tiene una textura suave similar a un bizcocho, con una capa de relleno de mousse de vainilla en el centro. Estas galletas son muy populares en Japón y pueden ser una opción deliciosa para aquellos que buscan un dulce suave y esponjoso."
    },
    {
        "id": "7798253182521",
        "img": "../images/490255517561.jpg",
        "nombre": "Galletita Azul",
        "fecha": "2026-07-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "La galletita Country Ma'am Mousse es un producto de la popular marca de dulces japonesa Fujiya. Se trata de una galleta suave y esponjosa con sabor a mousse de vainilla. Cada galleta es grande y tiene una textura suave similar a un bizcocho, con una capa de relleno de mousse de vainilla en el centro. Estas galletas son muy populares en Japón y pueden ser una opción deliciosa para aquellos que buscan un dulce suave y esponjoso."
    },
    {
        "id": "7798253182522",
        "img": "../images/711844120037.jpg",
        "nombre": "Salsa picante 50gr",
        "fecha": "2026-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "La salsa picante Sambal Asli de 50 gramos es un producto de condimento popular en la cocina de Indonesia y Malasia. Esta salsa picante se elabora tradicionalmente con chiles, ajo, vinagre y otros ingredientes, y se utiliza para agregar sabor y picante a una variedad de platos. El Sambal Asli es conocido por su sabor fuerte y picante, y puede ser utilizado como aderezo para arroz, fideos, carnes y verduras, o como salsa para mojar. El paquete de 50 gramos es conveniente para llevar contigo y puede ser una excelente opción para aquellos que disfrutan de los sabores picantes."
    },
    {
        "id": "7798253182523",
        "img": "../images/711844120082.jpg",
        "nombre": "Salsa picante con ajos 56 gr",
        "fecha": "2023-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "La salsa picante Sambal Asli de 50 gramos es un producto de condimento popular en la cocina de Indonesia y Malasia. Esta salsa picante se elabora tradicionalmente con chiles, ajo, vinagre y otros ingredientes, y se utiliza para agregar sabor y picante a una variedad de platos. El Sambal Asli es conocido por su sabor fuerte y picante, y puede ser utilizado como aderezo para arroz, fideos, carnes y verduras, o como salsa para mojar. El paquete de 50 gramos es conveniente para llevar contigo y puede ser una excelente opción para aquellos que disfrutan de los sabores picantes."
    },
    {
        "id": "7798253182524",
        "img": "../images/4710094106118.jpg",
        "nombre": "Te con leche marca Lipton",
        "fecha": "2023-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "El té con leche es una bebida popular en muchas partes del mundo, especialmente en Asia y el Reino Unido. La versión de Lipton combina té negro con leche para crear una bebida cremosa y suave, que se disfruta fría."
    },
    {
        "id": "7798253182525",
        "img": "../images/4710154013110.jpg",
        "nombre": "Soda sabor maracuyá",
        "fecha": "2023-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "La soda sabor maracuyá de C&C es una bebida refrescante con un sabor tropical y dulce a maracuyá. Esta soda se elabora utilizando extractos naturales de frutas y puede ser una excelente opción para aquellos que buscan una bebida refrescante con un sabor diferente y exótico. La soda sabor maracuyá de C&C puede ser disfrutada sola o como mezclador para cócteles y bebidas mixtas. El empaque es conveniente para llevar contigo y se puede disfrutar en cualquier lugar."
    },
    {
        "id": "7798253182526",
        "img": "../images/47101540131.jpg",
        "nombre": "Cheetos sabor Takoyaki",
        "fecha": "2023-04-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Los Cheetos sabor Takoyaki son un producto de snack japonés que se inspira en el popular platillo callejero japonés llamado takoyaki, que consiste en bolas de masa rellenas de pulpo y otros ingredientes. Estos Cheetos tienen un sabor agridulce y umami, con notas de salsa Worcestershire y mayonesa, y se dice que imitan el sabor del takoyaki. Los Cheetos sabor Takoyaki son muy populares en Japón y pueden ser una excelente opción para aquellos que buscan un snack salado y sabroso con un toque de sabor japonés. "
    },
    {
        "id": "7798253182527",
        "img": "../images/4710783089029.jpg",
        "nombre": "Miso con hondashi",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "El miso con Hondashi es un producto que se utiliza como base para preparar la sopa de miso. Es una mezcla de pasta de miso y Hondashi, que es un caldo de pescado seco y ahumado. El miso con Hondashi se utiliza para crear una sopa de miso casera, agregando agua caliente y otros ingredientes como tofu, cebolla verde y algas para crear una sopa deliciosa y reconfortante. Este tipo de miso es popular en la cocina japonesa y puede ser una excelente opción para aquellos que buscan una sopa sabrosa y auténtica."
    },
    {
        "id": "7798253182528",
        "img": "../images/4710958920010.jpg",
        "nombre": "Te Negro",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "El té negro Scotland Black Tea líquido es en realidad un producto de té concentrado de origen chino. Este té se elabora con hojas de té negro de alta calidad y se empaqueta en una botella de vidrio de 100 ml. El té negro de China tiene un sabor fuerte y profundo, y es una excelente opción para aquellos que prefieren un té negro robusto. Este té líquido se puede agregar a bebidas frías o calientes, como limonada, agua con gas, cócteles y más, para darles un toque de sabor a té negro."
    },
    {
        "id": "7798253182529",
        "img": "../images/4710958920119.jpg",
        "nombre": "Te de burbujas",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "El té de burbujas, también conocido como bubble tea o boba tea, es una bebida popular originaria de Taiwán que combina té, leche, hielo y perlas de tapioca o burbujas de gelatina. El té de burbujas puede prepararse utilizando diferentes tipos de té, y el té verde es una opción popular. El té verde de burbujas, también conocido como bubble green tea, se elabora con té verde y se sirve con las burbujas de tapioca en el fondo de la taza. La bebida se mezcla y se bebe con una pajita ancha para que las burbujas de tapioca se puedan disfrutar junto con el té. El té verde de burbujas es una bebida refrescante y popular en Asia y en otros lugares del mundo, y puede ser una excelente opción para aquellos que buscan una bebida única y emocionante."
    },
    {
        "id": "7798253182530",
        "img": "../images/4710958924476.jpg",
        "nombre": "Cafe con leche y sal rosada",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "El café con leche y sal rosada Nu Life es una bebida lista para beber que combina el sabor del café con la cremosidad de la leche y un toque de sal rosada. La sal rosada es una variedad de sal que se extrae de minas naturales en Pakistán y contiene minerales como hierro y magnesio, lo que le da un sabor y color únicos. Esta bebida de café con leche y sal rosada se empaqueta en una botella lista para beber, lo que la hace conveniente para llevar contigo mientras estás en movimiento. El café con leche y sal rosada Nu Life es una bebida popular en Asia y puede ser una excelente opción para aquellos que buscan una bebida de café con un sabor y un toque de sal únicos."
    },
    {
        "id": "7798253182531",
        "img": "../images/4901174310710.jpg",
        "nombre": "Furikake con algas",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "El furikake con algas es un condimento japonés que se utiliza para dar sabor a arroz, fideos, verduras y otros platos. Este furikake se elabora con una mezcla de algas secas, semillas de sésamo, sal, azúcar y otros ingredientes. El furikake con algas es rico en nutrientes y tiene un sabor salado y umami debido a la presencia de las algas. Este condimento es popular en la cocina japonesa y se puede encontrar en muchos hogares y restaurantes. El paquete de 45 gramos es conveniente para almacenar y se puede utilizar para condimentar muchos platos diferentes."
    },
    {
        "id": "7798253182532",
        "img": "../images/4902555.jpg",
        "nombre": "Galletitas Rojas",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "La galletita Country Ma'am Mousse es un producto de la popular marca de dulces japonesa Fujiya. Se trata de una galleta suave y esponjosa con sabor a mousse de vainilla. Cada galleta es grande y tiene una textura suave similar a un bizcocho, con una capa de relleno de mousse de vainilla en el centro. Estas galletas son muy populares en Japón y pueden ser una opción deliciosa para aquellos que buscan un dulce suave y esponjoso."
    },
    {
        "id": "7798253182533",
        "img": "../images/4902555175614.jpg",
        "nombre": "Galletita Verde",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "La galletita Country Ma'am Mousse es un producto de la popular marca de dulces japonesa Fujiya. Se trata de una galleta suave y esponjosa con sabor a mousse de vainilla. Cada galleta es grande y tiene una textura suave similar a un bizcocho, con una capa de relleno de mousse de vainilla en el centro. Estas galletas son muy populares en Japón y pueden ser una opción deliciosa para aquellos que buscan un dulce suave y esponjoso."
    },
    {
        "id": "7798253182534",
        "img": "../images/6911316600034.jpg",
        "nombre": "Caramelos Duros sabor Frutilla",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Los caramelos duros sabor frutilla son un dulce popular que se elabora con azúcar, jarabe de maíz y saborizantes artificiales o naturales para darles un sabor a frutilla. Estos caramelos se caracterizan por su textura dura y crujiente, lo que les permite durar más tiempo en la boca. Son una opción popular como dulce para llevar en el bolsillo o en la cartera, y también son populares como regalo o como parte de una canasta de dulces."
    },
    {
        "id": "7798253182535",
        "img": "../images/6923392182946.jpg",
        "nombre": "Salsa para marinar",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "La salsa para marinar Baizuoshi es una salsa china utilizada para marinar carnes, aves y pescados. Está elaborada con una mezcla de salsa de soja, vino de arroz, jengibre, ajo, azúcar y otros ingredientes, lo que le da un sabor salado, dulce y umami. La salsa Baizuoshi es popular en la cocina china y se utiliza para dar sabor y ablandar la carne antes de cocinarla. La carne, aves o pescados se dejan marinar en la salsa durante varias horas, lo que permite que los sabores penetren en la carne y la ablanden. La salsa Baizuoshi puede ser una excelente opción para aquellos que buscan agregar sabor y ternura a sus platos de carne."
    },
    {
        "id": "7798253182536",
        "img": "../images/6924743913387.jpg",
        "nombre": "Cheetos sabor pavo",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Los Cheetos sabor pavo chino son una variante de los populares Cheetos, un aperitivo de maíz con sabor a queso, que ha sido adaptado para el mercado chino. En este caso, los Cheetos están sazonados con un sabor a pavo, un ingrediente popular en la cocina china. El sabor a pavo chino es similar al sabor a pavo que se encuentra en los platos de carne de pavo en la cocina china, y se combina con el sabor a queso característico de los Cheetos. Estos Cheetos pueden ser una opción interesante para aquellos que buscan probar nuevos sabores o para aquellos que disfrutan de aperitivos con sabor a carne. "
    },
    {
        "id": "7798253182537",
        "img": "../images/6924743913585.jpg",
        "nombre": "Cheetos sabor barbacoa",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Los Cheetos sabor barbacoa son una variante de los populares Cheetos, un aperitivo de maíz con sabor a queso, que ha sido sazonado con un sabor a barbacoa. El sabor a barbacoa puede variar dependiendo del fabricante, pero generalmente incluye una mezcla de especias, como pimentón, cebolla en polvo, ajo en polvo, y otros ingredientes para darle un sabor ahumado y dulce. Los Cheetos sabor barbacoa pueden ser una opción interesante para aquellos que buscan probar nuevos sabores o para aquellos que disfrutan de aperitivos con sabor a carne."
    },
    {
        "id": "7798253182538",
        "img": "../images/6937491381766.jpg",
        "nombre": "Bebida Alcohólica a base de Arroz Glutinoso",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "La bebida alcohólica a base de arroz glutinoso es un tipo de bebida alcohólica que se elabora mediante la fermentación del arroz glutinoso. Esta bebida alcohólica se conoce comúnmente como sake, y es una bebida popular en Japón y otros países del este de Asia. El sake se elabora a través de un proceso de fermentación controlado que convierte los carbohidratos del arroz en alcohol. El resultado es una bebida alcohólica con un sabor suave y dulce, con un contenido de alcohol que puede variar de 12 a 20 por ciento. El sake se puede disfrutar frío o caliente, y se combina bien con una variedad de platos japoneses y otros platos de la cocina asiática."
    },
    {
        "id": "7798253182539",
        "img": "../images/6945601703230.jpg",
        "nombre": "Pastillitas mentoladas",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "Las pastillitas mentoladas con sabor a maracuyá son un tipo de dulce que combina la frescura del mentol con el sabor tropical y ácido de la fruta de la pasión. Estas pastillitas están diseñadas para refrescar el aliento y al mismo tiempo ofrecer un toque de sabor dulce y afrutado. Son ideales para llevar en el bolsillo o en la cartera, y se pueden disfrutar en cualquier momento del día. Además, estas pastillitas son libres de azúcar, lo que las convierte en una opción saludable para aquellos que buscan opciones de dulces más saludables o para aquellos que necesitan controlar su consumo de azúcar. Al ser libres de azúcar, estas pastillitas pueden ser una opción ideal para disfrutar de un sabor dulce sin tener que preocuparse por los efectos negativos del azúcar en la salud dental y general."
    },
    {
        "id": "7798253182540",
        "img": "../images/8850206117109.jpg",
        "nombre": "Salsa de Ostras",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "La salsa de ostras es un condimento popular en la cocina asiática que se utiliza para dar sabor a una amplia variedad de platos, como salteados, fideos, arroces y sopas. Esta salsa se elabora a partir de ostras frescas, que se cocinan con sal y agua para obtener un líquido espeso y salado. La salsa de ostras es especialmente popular en la cocina tailandesa, donde se utiliza en una amplia variedad de platos, desde salteados hasta sopas y guisos. Esta salsa de ostras de 350 gramos tiene su origen en Tailandia y es una excelente opción para aquellos que buscan agregar sabor umami y salado a sus platos favoritos. "
    },
    {
        "id": "7798253182541",
        "img": "../images/8850206253531.jpg",
        "nombre": "Salsa de Pescado",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "salsas",
        "description": "La salsa de pescado es un condimento popular en la cocina tailandesa y en otras cocinas asiáticas. Se elabora con pescado fermentado, sal y agua, y se utiliza para agregar sabor salado y umami a una gran variedad de platos, como sopas, curries, ensaladas y adobos. Esta salsa es especialmente popular en la cocina tailandesa, donde se utiliza como ingrediente básico en muchos de sus platos. Esta salsa de pescado de origen tailandés es una excelente opción para aquellos que buscan experimentar con los sabores auténticos de la cocina tailandesa."
    },
    {
        "id": "7798253182542",
        "img": "../images/8855444007113.jpg",
        "nombre": "Snack a base de Maiz Sabor Original",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "El snack a base de maíz sabor original Atori es un producto de snack crujiente que se elabora con maíz y tiene un sabor ligero y suave. Estos snacks se parecen a los corn nuts que son populares en los Estados Unidos, pero con un sabor diferente. Los snacks Atori son un aperitivo popular en Japón y son conocidos por su textura crujiente y su sabor sutil a maíz. El paquete contiene una porción generosa de snacks y es ideal para llevar como un snack portátil o para compartir con amigos y familiares."
    },
    {
        "id": "7798253182543",
        "img": "../images/8855444007212.jpg",
        "nombre": "Snack a base de Maiz Sabor Barbacoa",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "golosinas",
        "description": "El snack a base de maíz sabor barbacoa Atori es un producto de snack crujiente que se elabora con maíz y tiene un sabor a barbacoa. Estos snacks se parecen a los corn nuts que son populares en los Estados Unidos, pero con un sabor diferente. Los snacks Atori son un aperitivo popular en Japón y son conocidos por su textura crujiente y su sabor intenso a barbacoa. El paquete contiene una porción generosa de snacks y es ideal para llevar como un snack portátil o para compartir con amigos y familiares."
    },
    {
        "id": "7798253182544",
        "img": "../images/4710094106118.jpg",
        "nombre": "Te con leche marca Lipton",
        "fecha": "2026-03-13",
        "stock": 5,
        "precio": 1500,
        "categoria": "bebidas",
        "description": "El té con leche es una bebida popular en muchas partes del mundo, especialmente en Asia y el Reino Unido. La versión de Lipton combina té negro con leche para crear una bebida cremosa y suave, que se disfruta fría."
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 100 )
    })
}

export const getUnProducto = (idItem) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = products.find(prod => prod.id === idItem)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const productosPorCategoria = products.filter(prod => prod.categoria === idCategoria)
            resolve(productosPorCategoria);
        }, 100)
    })
}