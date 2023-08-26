let mushroom = [
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
]


const divideProductsInParts = (size) => {
    let productList = [];

	for (let i = 0; i < mushroom.length; i += size) {

		productList.push(mushroom.slice(i, i + size));
	}
	return productList; // array retornado, el array dividido en la cantidad productos por paginacion que pasemos por parametro
};

const appState = {
	product: divideProductsInParts(6), // en cuandos elementos vamos a dividir el array
    currentProductsIndex: 0, //Inicia en en el primer indice 1
	productLimit: divideProductsInParts(6).length, // el limite de la ultima paginacion
    activeFilter: null, // comienza en null y luego se cambia por la categoria clikeada
};

// console.log(appState);






const productContainer = document.querySelector(".productContainer"); //contenedor donde se renderizan las cards
const containerCategory = document.getElementById("container-category"); //todas las categorias del filtrado
const showMoreBtn = document.querySelector(".btn-load"); //btn de ver más
const categoriesList = document.getElementById("category"); //categoria de cada elemento





let cart = JSON.parse(localStorage.getItem("cart")) || [];

const createHTML = product =>{

    const { id, name, bid, user, userImg, cardImg } = product;
    return `
      <div class="product">
      <img src=${cardImg} alt=${name} />
      <div class="product-info">
  
          <div class="product-top">
              <h3>${name}</h3>
              <p>Current Bid</p>
          </div>
  
          <div class="product-mid">
              <div class="product-user">
                  <img src=${userImg} alt="user" />
                  <p>@${user}</p>
              </div>
              <span>${bid} eTH</span>
          </div>
  
  
          <div class="product-bot">
              <div class="product-offer">
                  <div class="offer-time">
                      <img src="./assets/img/fire.png" alt="" />
                      <p>05:12:07</p>
                  </div>
                  <button class="btn-add"
                  data-id='${id}'
                  data-name='${name}'
                  data-bid='${bid}'
                  data-img='${cardImg}'>Add</button>
              </div>
          </div>
      </div>
  </div>`;
};



const renderProducts = (productList) => {
    productContainer.innerHTML = productList.map(createHTML).join(" ")
}


// Funcion que checkee si estamos en el ultimo array del array de productos divididos
const isLastIndexOf = () =>
appState.nextProductsIndex === appState.productLimit - 1;



// Función para renderizar más productos cuando la persona presione VER MAS
const showMoreProducts = () => {
    appState.currentProductsIndex += 1

    let {product, currentProductsIndex} = appState
    renderProducts(product[currentProductsIndex])
    if (isLastIndexOf()) {
        showMoreBtn.classList.add("hidden");
    }
}


// Mostrar u ocultar btn de VER MAS
const setShowMorevisibility =() => {
    if (!appState.activeFilter){
        showMoreBtn.classList.remove("hidden")
        return;
    }
    showMoreBtn.classList.add("hidden")
}



const changeBtnActiveState = (selectCategory) => {
  const categories = [... categoriesList]

  categories.forEach((categoryBtn) => {
    if(categoryBtn.dataset.category !== selectCategory)
    {categoryBtn.classList.remove("active")
    return;
    }
        categoryBtn.classList.add("active");
})};
// console.log(changeBtnActiveState);

//cambiar el estado del filtro activo, modificando el appState
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category
  changeBtnActiveState (appState.activeFilter)
  setShowMorevisibility(appState.activeFilter)
}


// validar con un booleano si el btn que se apretó es de categoria y no está activo
const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains ("category") && !element.classList.contains ("active")
    )
};


// Funcion para aplicar el filtro por categorias
const applyFilter = (evt) => {
    const {target} = evt

    console.log(target)
    if (!isInactiveFilterBtn(target)) 
    return;
    productContainer.innerHTML = ""
    changeFilterState(target);

    if(appState.activeFilter){ 
        renderFilteredProducts();  
        appState.currentProductsIndex = 0;  
    return; 
    }

    renderProducts(appState.product[0] )
};

//filtrar y renderizar los productos
const renderFilteredProducts = () => {
    const filteredProducts = mushroom.filter(
    (product) => product.category === appState.activeFilter
  );

  renderProducts(filteredProducts);
};


// console.log(appState);

const init = () => {
    renderProducts(appState.product[0]); 
    containerCategory.addEventListener("click", applyFilter);
    showMoreBtn.addEventListener("click", setShowMorevisibility);
};


init();