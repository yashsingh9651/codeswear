import User from "@/models/User";
import connectDb from "@/middleware/connectDb";
var CryptoJS = require("crypto-js");
const handler = async (req,res)=>{
    if (req.method=='POST') {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(404).json({error:'This email is already exists'});
        }
        else{
            const {name,email} = req.body;
            let u = new User({name,email,password:CryptoJS.AES.encrypt(req.body.password,"secret123").toString()});
            await u.save();
            res.status(200).json({success:'success'});
        }
    }else{  
        res.status(404).json({error:'This method is not allowed'})
    }
}
export default connectDb(handler);