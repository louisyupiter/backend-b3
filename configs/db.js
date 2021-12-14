const mongoose = require("mongoose");

main = async () => {
  const dburl = `mongodb://localhost/multertest`;
  try {
    await mongoose.connect(dburl);
    console.log(`Mongoose Connected!`);
  } catch (error) {
    console.error.bind(console, "Connection Error:");
  }
}

module.exports = main;