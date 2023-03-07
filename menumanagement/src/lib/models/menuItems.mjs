import { mongoose, Schema } from 'mongoose';

export const menuItemSchema = new Schema ({
  name: String,
  chineseName: String,
  description: String,
  price: Number,
  category: String
});

// solves export issue if the model already exists before creation.
export const menuItems = mongoose.models['menuItems'] ? mongoose.model('menuItems') : mongoose.model('menuItems', menuItemSchema);