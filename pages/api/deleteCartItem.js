import connectDb from "../../middleware/connectDb";
import CartItem from "../../models/CartItem";
const handler = async (req, res) => {
    await CartItem.findByIdAndDelete(req.body.id);
    const cartItem = await CartItem.find();
  res.status(200).json({cartItem});
};
export default connectDb(handler);