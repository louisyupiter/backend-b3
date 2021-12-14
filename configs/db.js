const mongoose = require("mongoose");

main = async () => {
  const dburl = `mongodb://localhost/multertest`;
  try {
    await mongoose.connect("mongodb://localhost/multertest");
    console.log(`Mongoose Connected!`);
  } catch (error) {
    console.log(`Mongoose FAILED!`);
    console.error.bind(console, "Connection Error:");
  }
};

module.exports = main;
