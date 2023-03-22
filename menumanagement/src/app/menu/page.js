import { getMenuFixtures } from '../../lib/getMenuFixtures';
import { categories } from '../../lib/categoryFixtures';
import { CategoryItems } from '../../components/CategoryItems';
import { ItemCard } from '../../components/ItemCard';
import OrderingApp from '../../components/OrderingApp'
import MenuLink from '../../components/MenuLink';
import NavBar from '../../components/NavBar';
import styles from './page.module.css';
import Link from 'next/link';

// fetch data from menu api here
const getMenuDataFromMongo = async () => {
  const res = await fetch('http://localhost:3000/api/menu', {
    method: 'GET'
  });

  let data = await res.json();
  // console.log('this is the data', data);
  data = data.data.map(item => {
    return {
      menuName: `${item.name} ${item.chineseName}`,
      description: item.description,
      category: item.category,
      price: item.price,
      order: item.order
    }
  })
  return data;
}

const menuDivStyle = "border-solid border-indigo-500 border-2";

const Menu = async () => {
  const items = await getMenuFixtures(100);
  const databaseItems = await getMenuDataFromMongo();
  console.log ('databaseItems retrieved in menu SSR page', typeof databaseItems);

  return (
    <div className={styles.menu}>
      <NavBar />
      <OrderingApp items={databaseItems} categories={categories} />
    </div>
  )
}

export default Menu;
