const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/signup", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
