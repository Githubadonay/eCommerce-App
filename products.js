async function fetchProducts() {
    
    const response = await fetch("https://ecommerce-samurai.up.railway.app/product");
    
    const data = await response.json();

    const products = data.data;

    return products;
    
}

async function renderProducts(){
   const productsList = document.querySelector('#all-products-list');
   const productsFilter = document.querySelector(".products__header__filter").value;

   productsList.innerHTML = `<i class="fa-solid fa-spinner products__list__spinner"></i>`
   
   let products = await  fetchProducts();

   if(productsFilter === "Furniture"){
      products =  products.filter((product) =>  product.category === "Furniture")
    }else if(productsFilter === "Electronics"){
        products =  products.filter((product) =>  product.category === "Electronics")
    }else if(productsFilter === "Lamps"){
        products =  products.filter((product) =>  product.category === "Lamps")
    }else if(productsFilter === "Kitchen"){
        products =  products.filter((product) =>  product.category === "Kitchen")
    }else if(productsFilter === "Chairs"){
        products =  products.filter((product) =>  product.category === "Chairs")
    }else if(productsFilter === "Skin Care"){
        products =  products.filter((product) =>  product.category === "Skin Care")
    }

   const productsHTML = products.map((product)=> {
    return `<div class="product">
    <img src="https://ecommerce-samurai.up.railway.app/${product.images[0]}" alt="" class="product__img" />
    <div class="product__details">
        <h3 class="product__details__title">${product.name}</h3>
        <span class="product__details__price">$${product.price} </span>
    </div>
 </div>`
   }).join('');

    productsList.innerHTML = productsHTML;

   console.log(products[0]);

}

renderProducts();


