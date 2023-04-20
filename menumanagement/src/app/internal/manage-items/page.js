import getMenuDBSS from '../../../lib/serversideDBCalls/getMenuDBSS';
import ItemsTable from '../../../components/ItemsTable';

// Make call to retrieve menu data from database
// Send all data down to the fields.

const menuItems = await getMenuDBSS();
const menuItems2 = JSON.parse(menuItems);

const ManageItems = () => {
  return (
    <div>
      <ItemsTable items={menuItems2} />
    </div>
  );
};

export default ManageItems;