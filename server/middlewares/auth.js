const jwt = require("jsonwebtoken");
const { config } = require("../config/secret");


exports.auth = (req,res,next) => {
    const token = req.header("x-api-key");
    if(!token){
        return res.status(401).json({msg: "No Token Provided"})
    }
    try{
        const decodedToken = jwt.verify(token,"picassoSecret")
        req.tokenData = decodedToken
        next()
    }
    catch(err){
        console.log(err);
        res.status(502).json({err:"token invalid or expired "})
    }


}

// exports.authAdmin = (req, res, next) => {
//   if(req.tokenData){
//     console.log(req.tokenData);
//   }
//   try {
//     if (req.tokenData.role !== "admin") {
//       return res.status(401).json({ msg_err: "You must be admin in this endpoint" });
//     }
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(502).json({ err });
//   }
// }
 exports.authAdmin = (req, res, next) => {
  const token = req.header("x-api-key");

  if (!token) {
      return res.status(401).json({ msg: "No Token Provided" });
  }
  try {
      const decodedToken = jwt.verify(token, "picassoSecret");
      if (decodedToken.role !== "admin") {
          return res.status(403).json({ msg: "Access Denied" });
      }
      req.tokenData = decodedToken;
      next();
  } catch (err) {
      console.log(err);
      res.status(502).json({ err: "Token invalid or expired" });
  }
};