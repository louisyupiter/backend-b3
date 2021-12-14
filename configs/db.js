const mongoose = require("mongoose");

main = () => {
  const dburl = `mongodb://localhost/multertest`;
  try {
    mongoose.connect(dburl);
    console.log(`Mongoose Connected!`);
  } catch (error) {
    console.error.bind(console, "Connection Error:");
  }
};

module.exports = main;
