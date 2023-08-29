const productContainer = document.querySelector(".productContainer"); //contenedor donde se renderizan las cards
const containerCategory = document.getElementById("categories"); //todas las categorias del filtrado
const showMoreBtn = document.querySelector(".btn-load"); //btn de ver más
const categoriesList = document.getElementById("category"); //categoria de cada elemento





let cart = JSON.parse(localStorage.getItem("cart")) || [];

const createHTML = (product) =>{

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
    productContainer.innerHTML += productList.map(createHTML).join(" ")
}

// Funcion que checkee si estamos en el ultimo array del array de productos divididos
const isLastIndexOf = () =>
appState.currentProductsIndex === appState.productLimit - 1;



// Función para renderizar más productos cuando la persona presione VER MAS
const showMoreProducts = () => {
    appState.currentProductsIndex += 1

    let {products, currentProductsIndex} = appState;
    renderProducts(products[currentProductsIndex])
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

// FILTROS

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList]

//   console.log(categories);

  categories.forEach((categoryBtn) => {
    if(categoryBtn.dataset.category !== selectedCategory)
    {categoryBtn.classList.remove("active")
    return;
    }
        categoryBtn.classList.add("active");
})};


//cambiar el estado del filtro activo, modificando el appState
const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category
  changeBtnActiveState (appState.activeFilter)
  setShowMorevisibility(appState.activeFilter)

//   console.log(appState.activeFilter);

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

    // console.log(target)
    if (!isInactiveFilterBtn(target)) 
    return;
    productContainer.innerHTML = " ";

    changeFilterState(target);

    if(appState.activeFilter){ 
        renderFilteredProducts();  
        appState.currentProductsIndex = 0;  
    return; 
    }

    renderProducts(appState.products[0] )
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
    renderProducts(appState.products[0]); 
    containerCategory.addEventListener("click", applyFilter);
    showMoreBtn.addEventListener("click", showMoreProducts);
};


init();