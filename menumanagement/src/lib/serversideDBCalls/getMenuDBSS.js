import { db } from '../db/db.mjs';
import { menuItems } from '../models/menuItems.mjs';

// get menu serverside;
// output-type: ARRAY:  returns a formatted array of menu objects || returns an empty array if connection to DB fails.
export default async function getMenuDBSS() {
  await db(); // connect to the database

  try {
    const items = await menuItems.find({}); /* find all the data in our database */
    // res.status(200).json({ success: true, data: items });
    // console.log(items);
    let formattedItems = items.map(item => {
      return {
        menuName: `${item.name} ${item.chineseName}`,
        description: item.description,
        category: item.category,
        price: item.price,
        order: item.order
      }
    })
    return formattedItems;
  }
  catch (error) {
    return [];
  }
}