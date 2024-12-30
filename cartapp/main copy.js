const products = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "category": "men's clothing",
      "image": "images/product.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "image": "images/product.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "image": "images/product.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "image": "images/images.jpeg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
]

let productShow = document.getElementById("prod");
let cart = JSON.parse(localStorage.getItem('cart')) || [];

products.map((item) => {
  return (
    productShow.innerHTML += `
      <div class="productdiv">
      <img src=${item.image} width="200px">
      <h3>${item.title}</h3>
       <div class="quantity">
              <span class="quantity">quantity : </span>
              <input type="number" min=1 max=100 value=1 />
        </div>
      <h4>${item.price}</h4>
      <button onclick="addToCart('${item.title}')">Add to Cart</button>
      </div>
    `
  )
})

const addToCart = (title) => {
  const findProd = products.find((e) => e.title === title);
  findProd.quantity = 1;
  cart.push(findProd);
  
  let cartToStr = JSON.stringify(cart);
  localStorage.setItem('cart', cartToStr);
}




