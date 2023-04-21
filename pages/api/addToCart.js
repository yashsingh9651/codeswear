import connectDb from "../../middleware/connectDb";
import CartItem from "../../models/CartItem";
const handler = async (req, res) => {
  if (req.method == "POST") {
    const products = await CartItem.find();
    let p = new CartItem({
      slug: req.body.slug,
      title: req.body.title,
      category: "cartItems",
      img: req.body.img,
      size: req.body.size,
      color: req.body.color,
      price: req.body.price,
      quantity: 1,
    });
    if (products.includes(p)){
      res.status(400).json({ error: "This item is already added to the cart" });
    } else {
      await p.save();
      res.status(200).json({ success: "Product Added to Cart" });
    }
  }else{
    res.status(400).json({ error: "This method is not allowed" });
  }
};
export default connectDb(handler);