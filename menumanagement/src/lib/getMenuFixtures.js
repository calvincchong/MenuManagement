import { categories, descriptions } from './categoryFixtures';
import lastUpdatedData from './fixtures/kookoo_menuitems_20230400.json' assert {type: `json`}; // assert import, may cause issues, revert to using FS module to parse JSON files;

const delay = (time) => {
  return new Promise(() => {
    setTimeout(() => {
      resolve(1);
    }, time)
  })
}

const getMenuFixtures = async (number = 30) => {
  // await delay(500);'
  // console.log(categories, typeof categories)

  return new Array(number).fill(1).map((el, i) => {
    // get a random category to fill item;
    const randomCategory = Math.floor(Math.random() * categories.length);
    const randomDescription = Math.floor(Math.random() * descriptions.length);
    const item = categories[randomCategory];

    return {
      item_id: i,
      menuName: `menu-${i}`,
      price: `$12`,
      category: item,
      description: descriptions[randomDescription]
    }
  })
}

// Get items from saved JSON file that was last saved from the database.
// TODO: Add date last updated to JSON file and check if it's the most recent version.
const getMenuFixturesFromJSON = async () => {

  const items = lastUpdatedData.map(item => {
    return {
      menuName: `${item.name} ${item.chineseName}`,
      description: item.description,
      category: item.category,
      price: item.price,
      order: item.order
    }
  })

  return items;
}


module.exports = {
  'getMenuFixtures': getMenuFixtures,
  'getMenuFixturesFromJSON': getMenuFixturesFromJSON
}