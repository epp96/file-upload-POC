const express = require("express");
const upload = require("./upload");
const clean = require("./clean");
const cors = require("cors");

const server = express();

var corsOptions = {
  "Access-Control-Allow-Origin": "*",
  // 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  origin: "*",
  optionsSuccessStatus: 200
};

const port = 8080;

server.use(cors(corsOptions));

server.post("/upload", upload);
server.post("/clean", clean);

server.get("/", (req, res) => res.send("hello"));

server.listen(port, () => {
  console.log("Server started on port " + port);
});
