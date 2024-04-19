const http = require("http");
const app = require("./server");
const { hostname } = require("os");
const { Console } = require("console");

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`started on port ${port}`);
});
