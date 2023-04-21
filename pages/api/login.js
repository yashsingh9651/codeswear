import User from "@/models/User";
import connectDb from "@/middleware/connectDb";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    var bytes = CryptoJS.AES.decrypt(user.password, "secret123");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (user) {
      if (req.body.email == user.email && req.body.password == decryptedData){
        var token = jwt.sign({ success: true, email: user.email, name: user.name },'jwtsecret');
        res
          .status(200)
          .json({success: true,token,name:user.name,email:user.email});
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    }
  } else {
    res.status(404).json({ error: "No User Found" });
  }
};
export default connectDb(handler);
