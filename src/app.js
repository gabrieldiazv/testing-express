require("dotenv").config({
  path: __dirname + "/.env",
});
const { dirname } = require('path');
global.rootDir = dirname(require.main.filename);
const Server = require("./models/server");

const server = new Server();

server.listen();
