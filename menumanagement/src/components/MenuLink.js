// import { categories } from '../../lib/categoryFixtures';

'use client';

import styles from '../styles/MenuLink.module.css';
import Link from 'next/link';

const MenuLink = ({categories}) => {
  return (
    <div className={styles.linkBar}>
      {categories.map((category, i) => {
        return (
          <a href={`#${category}`} key={`link-${category}-${i}`}>
            <span className={styles.inLine}>
              {category}
            </span>
          </a>
        )
      }
      )}
    </div>
  )
}

export default MenuLink;