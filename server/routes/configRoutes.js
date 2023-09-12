const indexR = require("./index");
const picassoR = require("./picasso");


exports.routesInit = (app) => {
   app.use("/",indexR);
   app.use("/picasso",picassoR);
   
}