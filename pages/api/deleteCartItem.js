import connectDb from "../../middleware/connectDb";
import CartItem from "../../models/CartItem";
const handler = async (req, res) => {
    let deleted = await CartItem.findByIdAndDelete(req.body.id);
    let cartItem = await CartItem.find();
  res.status(200).json({cartItem});
};
export default connectDb(handler);