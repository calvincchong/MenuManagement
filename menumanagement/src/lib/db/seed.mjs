import { db, menuItems } from './db.mjs';

function seedData() {
  const TestItem = new menuItems({
    name: 'Curry Chicken',
    chineseName: 'JIALIJI',
    description: 'this is test data',
    price: 12.95,
    category: 'Curry',
  });

  TestItem.save()
    .then(doc => {
      console.log(`successfully added, ${doc}`);
    })
    .catch(error => {
      console.log(`Unsuccessful Attempt to Add, ${error}`);
    });
}

seedData();
