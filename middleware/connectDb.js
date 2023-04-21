const mongoose = require("mongoose");
const connectDb = handler=> async (req,res) => {
  const server = "127.0.0.1:27017";
  try {
    await mongoose.connect(`mongodb://${server}/codeswear`);
    console.log("mongodb connected");
    return handler(req,res);
  } catch (err) {
    console.log("mongodb connection error", err);
    return handler(req,res);
  }
};
module.exports = connectDb;