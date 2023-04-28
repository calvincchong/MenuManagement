import { mongoose, Schema } from 'mongoose';

export const userSchema = new Schema({
  email: String, // email of the user TODO: MAKE THIS UNIQUE IN PRODUCTION
  password: String, // password of the user
  firstName: String, // name of the user
  lastName: String, // name of the user
  authorized: String,
});

// solves export issue if the model already exists before creation.
export const users = mongoose.models['users']
  ? mongoose.model('users')
  : mongoose.model('users', userSchema);
