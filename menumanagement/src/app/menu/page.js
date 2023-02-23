import { getMenuFixtures } from '../../lib/getMenuFixtures';
import { categories } from '../../lib/categoryFixtures';
import { CategoryItems } from '../../components/CategoryItems';
import { ItemCard } from '../../components/ItemCard';
import OrderingApp from '../../components/OrderingApp'
import MenuLink from '../../components/MenuLink';
import styles from './page.module.css';
import Link from 'next/link';


const menuDivStyle = "border-solid border-indigo-500 border-2";

const Menu = async () => {
  const items = await getMenuFixtures(100);

  return (
    <div className={styles.menu}>
      <h1> Koo Koo Chicken Menu </h1>
      <MenuLink categories={categories} />
      <OrderingApp items={items}/>
    </div>
  )
}

export default Menu;
