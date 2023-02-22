import { getMenuFixtures } from '../../lib/getMenuFixtures';


const Menu = async () => {
  const items = await getMenuFixtures();
  console.log(items);

  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={`${item.name}-${i}`}>
            <h2>{item.menuName}</h2>
            <h3>{item.category}</h3>
            <h4>{item.price}</h4>
          </div>
        )
      })}
      hi
    </div>
  )
}

export default Menu;
