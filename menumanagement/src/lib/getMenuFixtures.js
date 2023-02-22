import categories from './categoryFixtures';

console.log(categories);

const delay = (time) => {
  return new Promise(() => {
    setTimeout(() => {
      resolve(1);
    }, time)
  })
}

const getMenuFixtures = async () => {
  // await delay(500);'
  console.log(categories, typeof categories)

  return new Array(10).fill(1).map((el, i) => {
    // get a random category to fill item;
    const randomCategory = Math.floor(Math.random() * categories.length - 1);
    const item = categories[randomCategory];

    return {
      item_id: i,
      menuName: `menu-${i}`,
      price: `$12`,
      category: item,
      description: `this menu item tastes amazing`
    }
  })
}

// export default getMenuFixtures;

module.exports = {
  'getMenuFixtures': getMenuFixtures
}