const mongoose = require("mongoose");

main = async () => {
  // const dburl = `mongodb://localhost/multertest`;
  const dburl = `mongodb+srv://test:testtest@dblouis.svmsb.mongodb.net/multertest?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(dburl);
    console.log(`Mongoose Connected!`);
  } catch (error) {
    console.log(`Mongoose FAILED!`);
    console.error.bind(console, "Connection Error:");
  }
};

module.exports = main;
