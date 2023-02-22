import styles from '../styles/ItemCard.module.css'

const ItemCard = ({item}) => {

  return (
      <div className={styles.box}>
        <h3>{item.menuName}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
      </div>
  )
}

module.exports = {
  'ItemCard': ItemCard
}