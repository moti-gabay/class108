const indexR = require("./index");
const categoryR = require("./category");
const linksR = require("./links");
const usersR = require("./users");



exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/category",categoryR);
  app.use("/links",linksR);
  app.use("/users",usersR);
}