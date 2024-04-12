const server = require("server");
const { get, post } = server.router;
const bodyParser = require("body-parser");
// Launch server with options and routes
server({ port: 8080 }, [
  get("/", (ctx) => "Hello world"),
  post("/", bodyParser.json(), (ctx) => {
    console.log(ctx.data);
    const { data } = ctx.request.body;
    let categories;
    try {
      categories = JSON.parse(data);
      N;
    } catch (error) {
      console.error("Error parsing data:", error);
      return (ctx.response.status = 400); // Set status code for bad request
    }

    function addtocart(a, categories) {
      if (categories) {
        cart.push({ ...categories[a] });
        displayCart();
      } else {
        console.error("Categories not available yet");
      }
    }
    addtocart();

    return "Success";
  }),
]);
