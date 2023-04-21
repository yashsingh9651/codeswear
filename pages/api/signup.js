import User from "@/models/User";
import connectDb from "@/middleware/connectDb";
const handler = async (req,res)=>{
    if (req.method=='POST') {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            res.status(404).json({error:'This email is already exists'});
        }
        else{
            let u = new User(req.body)
            await u.save()
            res.status(200).json({success:'success'})
        }
    }else{
        res.status(404).json({error:'This method is not allowed'})
    }
}
export default connectDb(handler);