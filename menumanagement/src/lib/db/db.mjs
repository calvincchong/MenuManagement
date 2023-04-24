import { mongoose, Schema } from 'mongoose';
// import * as dotenv from 'dotenv';
// dotenv.config();
import dynamic from 'next/dynamic';

// Warns issue if Mongodb is not set up
if (!process.env.MONGODB_USERNAME || !process.env.MONGODB_PASSWORD) {
  console.log('Add your MongoDB username and password to .env.local');
  throw new Error(
    'Please define MongoDB_USERNAME, MongoDB_PASSWORD and MongoDB_DB inside .env.local',
  );
}

const username = encodeURIComponent(process.env.MONGODB_USERNAME);
const password = encodeURIComponent(process.env.MONGODB_PASSWORD);
const collectionName = encodeURIComponent('Restaurant');
const connection = `mongodb+srv://${username}:${password}@cluster0.eaoousv.mongodb.net/${collectionName}?retryWrites=true&w=majority`;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const db = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(`${connection}`, opts).then(mongoose => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log(`connected to ${cached.conn}`);
  } catch (error) {
    console.log(error);
    cached.promise = null;
    throw error;
  }

  return cached.conn;
};

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

// const connection = 'mongodb://127.0.0.1/Restaurant';

// export const db = async () => {
//   mongoose
//     .connect(`${connection}`)
//     .then(res => {
//       console.log(`Connected to MongoDB at 127.0.0.1:27017 ${res}`);
//     })
//     .catch(error => {
//       console.log(`could not connect due to ${error}`);
//     });
// };
