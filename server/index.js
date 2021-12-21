"use strict"

const services = require("./services");
//const routes = require("./routes");
const middlewares = require("./middlewares");
const controllers = require("./controllers");
const bootstrap = require("./bootstrap");

module.exports = {
  bootstrap,
  controllers,
  middlewares,
  //routes,
  services
};
