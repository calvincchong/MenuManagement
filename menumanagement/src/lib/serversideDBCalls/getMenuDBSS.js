import { db } from '../db/db.mjs';
import { menuItems } from '../models/menuItems.mjs';

export const revalidate = 10;

// get menu serverside; database connection is made once when calling menu item
// output-type: ARRAY:  returns a formatted array of menu objects || returns an empty array if connection to DB fails.
export default async function getMenuDBSS() {
  await db(); // makes connection to the database. The only thing is I don't want to have it make multiple connections every time I make an API call/.

  try {
    const items = await menuItems.find(
      {},
    ); /* find all the data in our database */
    // res.status(200).json({ success: true, data: items });
    // console.log(items);
    let formattedItems = await Promise.all(
      items.map(item => {
        // console.log('item and options', item.name, item.options);

        let itemOptions = item.options !== null ? item.options : [];

        // console.log(
        //   item.name,
        //   itemOptions,
        //   typeof itemOptions,
        //   Array.isArray(itemOptions),
        // );

        // console.log(itemOptions, typeof itemOptions);

        return {
          id: item._id,
          menuName: `${item.name} ${item.chineseName}`,
          englishName: item.name,
          chineseName: item.chineseName,
          description: item.description,
          category: item.category,
          price: item.price,
          order: item.order,
          // options: JSON.stringify(itemOptions),
          options: itemOptions,
        };
      }),
    );

    // console.log('this is formatted items', formattedItems);
    return JSON.stringify(formattedItems);
  } catch (error) {
    return [];
  }
}
