import { ItemCard } from './ItemCard';

const CategoryItems = ({items}) => {
  console.log('in cat items', `${Array.isArray(items)}`);

  return (
    <div>
      {/* {items.map((item, i) => {
        return <ItemCard items={items}/>
      })} */}
      <ItemCard items={items} />
    </div>
  )
}

module.exports = {
  'CategoryItems': CategoryItems
}