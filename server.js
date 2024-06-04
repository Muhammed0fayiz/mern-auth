// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// import dotenv from 'dotenv'


// dotenv.config();
const server= mongoose.connect('mongodb://127.0.0.1:27017/mernproject')
  .then(() => {
    console.log("Mongo connected successfully")
  })
  .catch((error) => {
    console.log(error);
  });

// module.exports={server}

export default server