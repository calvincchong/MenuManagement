import { getMenuFixtures } from '../../lib/getMenuFixtures';
import { categories } from '../../lib/categoryFixtures';
import { CategoryItems } from '../../components/CategoryItems';
import { ItemCard } from '../../components/ItemCard';
import MenuLink from '../../components/MenuLink';
import styles from './page.module.css';
import Link from 'next/link';


const menuDivStyle = "border-solid border-indigo-500 border-2";

const Menu = async () => {
  const items = await getMenuFixtures(100);

  return (
    <div className={styles.menu}>
      <h1> Koo Koo Chicken Menu </h1>
      <a href='#Specialty'>Specialties</a>
      <MenuLink categories={categories} />
      {categories.map((category, i) => {
        const itemsByCategory = items.filter(item => {
          return item.category === category;
        })

        return (
          <div id={category} className={styles.categorySections}>
            <div>
              <h2>{category}</h2>
            </div>
            <CategoryItems items={itemsByCategory} />
          </div>
        )}
      )}
    </div>
  )
}

export default Menu;
