import { mongoose, Schema } from 'mongoose';

const connection = 'mongodb://127.0.0.1/Restaurant';

export const db = mongoose.connect(`${connection}`)
  .then(() => {
    console.log(`Connected to MongoDB at 127.0.0.1:27017`)
  })
  .catch((error) => {
    console.log(`could not connect due to ${error}`)
  })

export const menuItemSchema = new Schema ({
    name: String,
    chineseName: String,
    price: Number,
    category: String
  });

export const menuItems = mongoose.model('MenuItems', menuItemSchema);

// // const TestItem = new menuItems({
// //   name: 'Curry Chicken',
// //   chineseName: 'JIALIJI',
// //   price: 12.95,
// //   category: 'Curry'
// // })

// // TestItem.save()
// //   .then((doc) => {
// //     console.log(`successfully added, ${doc}`)
// //   })
// //   .catch((error) => {
// //     console.log(`Unsuccessful Attempt to Add, ${error}`)
// //   })

// // module.exports = {
// //   'menuItems': menuItems,
// //   'db': db
// // }

// module.exports = {
//   db,
//   menuItems
// }

console.log('dude at least the module works');