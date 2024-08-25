const cartShow = document.getElementById('showcart');

let strToCart = localStorage.getItem('cart');

let cartTwo = JSON.parse(strToCart)

cartTwo.map((item) => {
  let savedQuantity = item.quantity || 1;
  let subTotal = savedQuantity * item.price;
    return (
        cartShow.innerHTML += `
        <table class="table">
        <thead>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
        </thead>

     

        <tbody>
        <tr>
        <td><img src=${item.image} width="100px"></td>
        <td>${item.title}</td>
        <td>${item.price}</td>
        <td> 
              <input type="number" onchange="myFunction(this)" data-id="${item.id}" data-price="${item.price}" id="cartQuantity" min=1 max=100 value="${savedQuantity}" /></td>
        <td id="subtotal_${item.id}">${subTotal}</td>
      
        </tr>

        </tbody>
           </table>

        `
    )
})

function myFunction(thisKeyword) {
  let itemQuantity = thisKeyword.value;
  let itemPrice = thisKeyword.getAttribute("data-price");
  let itemId = thisKeyword.getAttribute("data-id");

  let subTotal =itemPrice * itemQuantity;
  let itemSubTotal = document.getElementById("subtotal_" + itemId);
  itemSubTotal.innerHTML = subTotal;

  cartTwo = cartTwo.map(item => {
    if (item.id == itemId) {
        item.quantity = itemQuantity; 
    }
    return item;
});

localStorage.setItem('cart', JSON.stringify(cartTwo));
  
  
}
