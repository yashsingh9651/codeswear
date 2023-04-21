import connectDb from "../../middleware/connectDb";
import Product from "../../models/Product";
const handler = async(req,res) => {
    if(req.method=='POST'){
        for (let i = 0; i < req.body.length; i++) {
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                category: req.body[i].category,
                img: req.body[i].img,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
            })
            await p.save();
        }
        res.status(200).json({success:'succcess'});
    }else{
        res.status(400).json({error:'This method is not allowed'});
    }
}
export default connectDb(handler);