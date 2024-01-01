const mongoose = require('mongoose');
const {config} = require("../config/secret")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(config.MONGO_CONNECT);
  console.log(`mongo connect 108links`);
}