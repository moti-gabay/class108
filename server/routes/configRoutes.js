const indexR = require("./index");
const categoriesR = require("./categories");


exports.routesInit = (app) => {
   app.use("/",indexR);
   app.use("/categories",categoriesR);
   
}