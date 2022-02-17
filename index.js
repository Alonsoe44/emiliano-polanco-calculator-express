require("dotenv").config();
const express = require("express");
const debug = require("debug")("small-server:root");

const port = process.env.MY_PORT;
const app = express();

const server = app.listen(port, () => {
  debug(`The server is up and listening on http://localhost:${port}`);
});

console.log(server);
