import connectDb from "../../middleware/connectDb";
import Product from "../../models/Product";
const handler = async (req, res) => {
  let products = await Product.find();
  let tshirtSizes = {};
  for (let item of products) {
    if (item.title in tshirtSizes) {
      if (
        !tshirtSizes[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirtSizes[item.title].color.push(item.color);
      }
      if (
        !tshirtSizes[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirtSizes[item.title].size.push(item.size);
      }
    } else {
      if (item.color) {
        tshirtSizes[item.title] = JSON.parse(JSON.stringify(item));
      }
      if (item.availableQty > 0 && item.color) {
        tshirtSizes[item.title].color = [item.color];
        tshirtSizes[item.title].size = [item.size];
      }
    }
  }
  // res.status(200).json({products})
  res.status(200).json({ tshirtSizes });
};
export default connectDb(handler);
