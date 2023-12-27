const jwt = require("joi");


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
exports.authAdmin = (req, res, next) => {
    const token = req.header("x-api-key");
    if (!token) {
      return res.status(401).json({ err: "You need send token 111 aaaaa" });
    }
    try {
      const decodeToken = jwt.verify(token, "picassoSecret");
      if (decodeToken.role != "admin" && decodeToken.role != "superadmin") {
        return res
          .status(401)
          .json({ err: "you must be admin in this endpoint" });
      }
      req.tokenData = decodeToken;
      next();
    } catch (err) {
      res.status(401).json({ err: "token invalid or expired 2222 bbbbb" });
    }
  };