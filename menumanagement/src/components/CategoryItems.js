"use client";
import { ItemCard } from "./ItemCard";
import styles from "../styles/CategoryItems.module.css";

const CategoryItems = ({ items }) => {
  // console.log('in cat items', `${Array.isArray(items)}`);

  return (
    <div className={styles.twoCol}>
      {items.map((item, i) => {
        return <ItemCard item={item} key={`${item.menuName} ${i}`} />;
      })}
    </div>
  );
};

module.exports = {
  CategoryItems: CategoryItems,
};
