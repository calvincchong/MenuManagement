import { mongoose, Schema } from 'mongoose';
// import * as dotenv from 'dotenv';
// dotenv.config();
import dynamic from 'next/dynamic';

console.log('whats my username', process.env.MONGODB_USERNAME)

if (!process.env.MONGODB_USERNAME || !process.env.MONGODB_PASSWORD) {
  console.log('Add your MongoDB username and password to .env.local');
}

const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const collectionName = encodeURIComponent("Restaurant");

// const connection = 'mongodb://127.0.0.1/Restaurant';
// const connection = `mongodb+srv://${username}:${password}@cluster0.eaoousv.mongodb.net/${collectionName}?retryWrites=true&w=majority`;
// // const connection = process.env.MONGODB_URI;

// export const db = async () => {
//   mongoose.connect(`${connection}`, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then((res) => {
//     console.log(`Connected to MongoDB at 127.0.0.1:27017 ${res}`);
//   })
//   .catch((error) => {
//     console.log(`could not connect due to ${error}`);
//   })
// }

// console.log('dude at least the module works');

const connection = 'mongodb://127.0.0.1/Restaurant';
// const connection = process.env.MONGODB_URI;

export const db = async () => {
  mongoose.connect(`${connection}`)
  .then((res) => {
    console.log(`Connected to MongoDB at 127.0.0.1:27017 ${res}`);
  })
  .catch((error) => {
    console.log(`could not connect due to ${error}`);
  })
}
