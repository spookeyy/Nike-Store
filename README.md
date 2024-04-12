# Nike-Store
https://spookeyy.github.io/Nike-Store/

## Description
This online shop javascript code creates a dynamic Nike product listing with add-to-cart functionality. It fetches data from server data stored in an array (categories) containing product details (image, title, price) and generates HTML elements for each product. Users can add items to the cart, which updates a cart display with the selected products and total price.

## Installation
1. I include the JavaScript file (`script.js`) in my index HTML file using a <script> tag:

```HTML
<script src="script.js"></script>
```

2. The index.html have the necessary HTML elements in:
. A container element with the ID root to display the product listings.
. An element with the ID count to show the number of items in the cart.
. An element with the ID cartItem to display the cart contents.
. An element with the ID total to show the total price of items in the cart.

## Usage
. Replace the categories array with your actual product json data in the JavaScript code.
. Ensure that the image property in each product object points to the correct image URL.
. Using Font Awesome icons for the trash can button in the cart display (instructions below).
### Font Awesome Integration (Optional)
If you want to use the trash can icon from Font Awesome, follow these steps:
1. Include Font Awesome's CSS library in your HTML file:
```HTML
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-Q8izPIyW9zTYcA5gwkmE0zLKsrhgAeVQgSXgGjCGLCKXdTGxTzeNvLNvEKRF9BPIFYguchIqKDwdqPjOnickWQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```
2. Update the trash can button markup in the displayCart function to use the Font Awesome class:
```JavaScript
"<i class='fa-solid fa-trash' onclick='delElement(" +
j++ +
")'></i>"
```

## Functionality
. The code fetches product data from the server and stores in the categories array.
. It dynamically generates HTML markup for each product, including an image, title, price, and an "Add to cart" button.
. When the "`Add to cart`" button is clicked, the selected product is added to the cart array.
. The `displayCart` function updates the cart display with the selected products and calculates the total price.

## Customization
You can customize the code in various ways:
. Modify the CSS styles in the index HTML file to adjust the appearance of the product listings and cart display.
. Add functionality to handle checking out from the cart.

## LICENCE
GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007
                       Author: Mesh Spookeyy