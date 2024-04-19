const product = [
  {
    id: 0,
    image: "images/shirt1.png",
    title: "Best Outfit-casual",
    price: 1200,
  },
  {
    id: 1,
    image: "images/winter-jacket.jpg",
    title: "Best Outfit-Winter-Jacket",
    price: 1500,
  },
  {
    id: 2,
    image: "images/grey-tech-fleece-joggers.jpeg",
    title: "Grey Tech Fleece Joggers",
    price: 1570,
  },
  {
    id: 3,
    image: "images/black2-tech-fleece-joggers.jpeg",
    title: "black Tech Fleece Joggers",
    price: 1300,
  },
  {
    id: 4,
    image: "images/black-dri-fit-cotton.jpeg",
    title: "Black Dri Fit Cotton",
    price: 1400,
  },
  {
    id: 5,
    image: "images/custom-airforce-1-low.jpeg",
    title: "Custom airforce 1 Low",
    price: 4000,
  },
  {
    id: 6,
    image: "images/air-jordan-1.jpeg",
    title: "Air Jordan 1",
    price: 4500,
  },
  {
    id: 7,
    image: "images/black-air-force-1.webp",
    title: "Black Air Force 1",
    price: 3500,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class = 'box'>
        <div class = 'img-box'>
        <img class = 'images' src=${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>KSH ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function displayProduct() {
  // listProducts = data;
  image.innerHTML = "";
  if (listProducts.length > 0) {
    listProducts.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("box");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
         <div class = 'img-box'>
         <img class = 'images' src=${product.image}></img>
         </div>
         <div class = 'bottom'>
         <p>${product.title}</p>
         <h2>KSH ${product.price}.00</h2>
      <button class="addCart" onclick='addtocart()'>Add to cart</button>
      </div>`;

      image.appendChild(newProduct);
    });
  }
}
// displayProduct()

image.addEventListener("click", (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains("addCart")) {
    let product_id = event.target.dataset.id;
    alert(product_id);
    addtocart(product_id);
  }
});

//add to cart
function addtocart(a) {
  cart.push({ ...categories[a] });
  displayCart();
}

// //delete from cart
function delElement(a) {
  cart.splice(a, 1);
  displayCart();
}

//display cart
function displayCart(a) {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "KSH " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "KSH " + total + ".00";
        return (
          `<div class = "cart-item">
                <div class="row-img">
                <img class = "rowimg" src=${image}>
                </div>
                <p style="font-size:12px;">${title}</p>
                <h2 style="font-size: 15px;">KSH ${price}.00</h2> ` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}