
const url = "http://localhost:3000/product"

const image = document.getElementById('root')

fetch(url)
.then(res => res.json())
.then(data => {
  
})

function displayProduct(){
fetch(url)
  .then((res) => res.json())
  .then((data) => 
  {
    data.forEach((product) => {
      image.insertAdjacentHTML('beforeend', `<div class = 'box'>
         <div class = 'img-box'>
         <img class = 'images' src=${product.image}></img>
         </div>
         <div class = 'bottom'>
         <p>${product.title}</p>
         <h2>KSH ${product.price}.00</h2>
      <button onclick='addtocart()'>Add to cart</button>
      </div>
        </div>`)
    });
});
}
displayProduct()



// let i = 0;
// document.getElementById("root").innerHTML = categories
//   .map((item) => {
//     var { image, title, price } = item;
//     return (
//       `<div class = 'box'>
//         <div class = 'img-box'>
//         <img class = 'images' src=${image}></img>
//         </div>
//         <div class = 'bottom'>
//         <p>${title}</p>
//         <h2>KSH ${price}.00</h2>` +
//       "<button onclick='addtocart(" +
//       i++ +
//       ")'>Add to cart</button>" +
//       `</div>
//         </div>`
//     );
//   })
//   .join("");

// var cart = [];

//add to cart
function addtocart() {
fetch(url)
.then(res => res.json())
.then(data => {
  data.forEach(product => {
    // const item = document.createElement('div')
    const cartItem = document.getElementById("cartItem");
    const newCartItem = document.createElement('div')
    cartItem.innerHTML = 
    `<div class = "cart-item">
                <div class="row-img">
                <img class = "rowimg" src=${product.image}>
                </div>
                <p style="font-size:12px;>${product.title}</p>
                <h2 style="font-size: 15px;">KSH ${product.price}.00</h2>
            <i class='fa-solid fa-trash' id='trash' onclick='delElement()'></i></div>`;

cartItem.append()
  
const trash = document.getElementsByClassName('cart-item')


  displayCart();
  })
})

}

// //delete from cart
function delElement(a) {
a.target.parentNode.remove();
  displayCart();
}

// //display cart
function displayCart(a) {
  fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
           const cartItem = document.getElementById("cartItem");
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = product.length;
  if (product.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "KSH " + 0 + ".00";
  } else {
    // document.getElementById("cartItem").innerHTML = product
      // .map((items) => {
        // var { price } = items;
        total = total + product.price;
        document.getElementById("total").innerHTML = "KSH " + total + ".00";
        // cartItem.document.insertAdjacentHTML(
        //   "beforeend",
        //   `<div class = "cart-item">
        //         <div class="row-img">
        //         <img class = "rowimg" src=${product.image}>
        //         </div>
        //         <p style="font-size:12px;>${product.title}</p>
        //         <h2 style="font-size: 15px;">KSH ${product.price}.00</h2>  +
        //     <i class='fa-solid fa-trash' onclick='delElement()'></i></div>`
        // );
      // })

  }
    })
  })
 
}
