let mushroomData = [
    { 
        id: 1,
        nombre: "girgola parda",
        category: "frescos",
        precio: 700,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 2,
        nombre: "girgola parda",
        category: "conservas",
        precio: 1300,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 3,
        nombre: "girgola parda",
        category: "secos",
        precio: 2000,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    {
        id: 4,
        nombre: "shiitake",
        category: "frescos",
        precio: 2000,
        img: src="/Imagenes/shiitake-producto.jpg"
    },
    {
        id: 5,
        nombre: "melena de leon",
        category: "secos",
        precio: 2000,
        img: src="/Imagenes/melena-de-leon.png"
    },
    { 
        id: 6,
        nombre: "girgola parda",
        category: "frescos",
        precio: 700,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 7,
        nombre: "girgola parda",
        category: "conservas",
        precio: 1300,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    { 
        id: 8,
        nombre: "girgola parda",
        category: "secos",
        precio: 2000,
        img: src="/imagenes/girgola-parda-producto.jpg"
    },
    {
        id: 9,
        nombre: "shiitake",
        category: "frescos",
        precio: 2000,
        img: src="/Imagenes/shiitake-producto.jpg"
    },
    {
        id: 10,
        nombre: "melena de leon",
        category: "secos",
        precio: 2000,
        img: src="/Imagenes/melena-de-leon.png"
    },

]



const divideProductsInParts = (size) => {
    let productList = [];

	for (let i = 0; i < mushroomData.length; i += size) {

		productList.push(mushroomData.slice(i, i + size));
	}
	return productList; // array retornado, el array dividido en la cantidad productos por paginacion que pasemos por parametro
};

// console.log(divideProductsInParts(6));

const appState = {
	products: divideProductsInParts(6), // en cuandos elementos vamos a dividir el array
    currentProductsIndex: 0, //Inicia en en el primer indice 1
	productLimit: divideProductsInParts(6).length, // el limite de la ultima paginacion
    activeFilter: null, // comienza en null y luego se cambia por la categoria clikeada
};

// console.log(appState);