const indexR = require("./index");
const categoryR = require("./category");
const linksR = require("./links");



exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/category",categoryR);
  app.use("/links",linksR);
}