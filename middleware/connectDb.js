const mongoose = require("mongoose");
const connectDb = handler=> async (req,res) => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGO_URI}/codeswear`);
    console.log("mongodb connected");
    return handler(req,res);
  } catch (err) {
    console.log("mongodb connection error", err);
    return handler(req,res);
  }
};
module.exports = connectDb;