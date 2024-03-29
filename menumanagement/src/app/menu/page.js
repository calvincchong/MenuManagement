import {
  getMenuFixtures,
  getMenuFixturesFromJSON,
} from '../../lib/getMenuFixtures';
import { categories } from '../../lib/categoryFixtures';
import { CategoryItems } from '../../components/CategoryItems';
import { ItemCard } from '../../components/ItemCard';
import OrderingApp from '../../components/OrderingApp';
import MenuLink from '../../components/MenuLink';
import NavBar from '../../components/NavBar';
import styles from './page.module.css';
import tcss from '../../styles/globaltailwind';
import Link from 'next/link';
import getMenuDBSS from '../../lib/serversideDBCalls/getMenuDBSS';
import Footer from '../../components/Footer';

const headerTCSS =
  'max-h-xxxvh flex relative justify-center place-content-center min-h-xxxvh bg-center bg-fixed bg-cover bg-[url(https://res.cloudinary.com/dq6rqplja/image/upload/v1682348015/SUB500/HEADER_IMAGE_WIDE_jni1af.jpg)] min-h-fit min-h-20 max-h-40';
const menuDivStyle = 'border-solid border-indigo-500 border-2';

let databaseItems = await getMenuDBSS(); // this now works outside of the SSComponent due to webpack's top level await being allowed. Could be source of issues in the future, move back into the functional component if necessary.
databaseItems = JSON.parse(databaseItems);
const isMostRecentMenu = databaseItems.length > 0 ? true : false;
databaseItems = isMostRecentMenu ? databaseItems : await getMenuFixtures(100); // failsafe to render page when there's no data in

const NotUpdatedMessage = () => {
  if (isMostRecentMenu) {
    return null;
  } else {
    return (
      <div className={styles.notUpdatedMessage}>
        <p className="text-red-500">
          Note that this is not the most recent menu. Please try reloading the
          page for the most recent menu. We apologize for the inconvenience.
        </p>
      </div>
    );
  }
};

const Menu = async () => {
  // console.log('this is database Items', databaseItems, 'typeof databaseItems', typeof databaseItems);

  return (
    <>
      <div className={styles.menu}>
        <NavBar />
        <div className={styles.photoHeader}>
          <div className="text-center mt-auto mb-auto">
            <div>
              <h1 className={tcss.h1white}>Our Menu</h1>
            </div>
            <div className="text-slate-50">
              Homemade Malaysian Food - no passport needed
            </div>
            <div className="text-slate-50 py-2">
              Call 718-827-1698 to place your order.
            </div>
          </div>
        </div>
        <NotUpdatedMessage />
        <OrderingApp items={databaseItems} categories={categories} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Menu;
