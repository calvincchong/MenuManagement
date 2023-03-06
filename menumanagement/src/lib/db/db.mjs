import { mongoose, Schema } from 'mongoose';
import dynamic from 'next/dynamic';


const connection = 'mongodb://127.0.0.1/Restaurant';

export const db = async () => {
  mongoose.connect(`${connection}`)
  .then(() => {
    console.log(`Connected to MongoDB at 127.0.0.1:27017`)
  })
  .catch((error) => {
    console.log(`could not connect due to ${error}`)
  })
}

console.log('dude at least the module works');