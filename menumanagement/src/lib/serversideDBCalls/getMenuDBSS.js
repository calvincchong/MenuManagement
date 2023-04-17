import { db } from '../db/db.mjs';
import { menuItems } from '../models/menuItems.mjs';

// get menu serverside; database connection is made once when calling menu item
// output-type: ARRAY:  returns a formatted array of menu objects || returns an empty array if connection to DB fails.
export default async function getMenuDBSS() {

  await db(); // makes connection to the database. The only thing is I don't want to have it make multiple connections every time I make an API call/.

  try {
    const items = await menuItems.find({}); /* find all the data in our database */
    // res.status(200).json({ success: true, data: items });
    // console.log(items);
    let formattedItems = items.map(item => {
      return {
        menuName: `${item.name} ${item.chineseName}`,
        englishName: item.name,
        chineseName: item.chineseName,
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