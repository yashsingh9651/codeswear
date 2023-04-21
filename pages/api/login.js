import User from "@/models/User";
import connectDb from "@/middleware/connectDb";
const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.email == user.email && req.body.password == user.password) {
        res
          .status(200)
          .json({ success: "success", email: user.email, name: user.name });
      } else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    }
  } else {
    res.status(404).json({ error: "No User Found" });
  }
};
export default connectDb(handler);