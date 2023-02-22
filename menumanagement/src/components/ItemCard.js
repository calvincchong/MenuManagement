import styles from '../styles/ItemCard.module.css'

const ItemCard = ({items}) => {
  // console.log(items, `${Array.isArray(items)}`);

  return (
    <>
      {items.map((item, i) =>
        <div className={styles.box} key={`${item.menuName} ${i}`}>
          <h3>{item.menuName}</h3>
          <h3>{item.price}</h3>
          <p>{item.description}</p>
        </div>
      )}
    </>
  )
}

module.exports = {
  'ItemCard': ItemCard
}