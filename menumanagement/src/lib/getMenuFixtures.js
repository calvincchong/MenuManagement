import { categories, descriptions } from './categoryFixtures';

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

// export default getMenuFixtures;

module.exports = {
  'getMenuFixtures': getMenuFixtures
}