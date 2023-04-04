import { getMenuFixtures } from '../../lib/getMenuFixtures';
import { categories } from '../../lib/categoryFixtures';
import { CategoryItems } from '../../components/CategoryItems';
import { ItemCard } from '../../components/ItemCard';
import OrderingApp from '../../components/OrderingApp'
import MenuLink from '../../components/MenuLink';
import NavBar from '../../components/NavBar';
import styles from './page.module.css';
import Link from 'next/link';
import getMenuDBSS from '../../lib/serversideDBCalls/getMenuDBSS';

// fetch data from menu api here but no longer used since this is an internal API call on a server component.
// const getMenuDataFromMongo = async () => {
//   const res = await fetch('http://localhost:3000/api/menu', {
//     method: 'GET'
//   });
//   // const res = await fetch(`${process.env.DOMAIN}/api/menu`, {
//   //   method: 'GET'
//   // });

//   let data = await res.json();
//   // console.log('this is the data', data);
//   data = data.data.map(item => {
//     return {
//       menuName: `${item.name} ${item.chineseName}`,
//       description: item.description,
//       category: item.category,
//       price: item.price,
//       order: item.order
//     }
//   })
//   return data;
// }

const menuDivStyle = "border-solid border-indigo-500 border-2";

const Menu = async () => {
  // console.log('this is database Items', databaseItems);
  // console.log ('databaseItems retrieved in menu SSR page', typeof databaseItems);

  return (
    <div className={styles.menu}>
      <NavBar />
      <OrderingApp items={databaseItems} categories={categories} />
    </div>
  )
}

export default Menu;
