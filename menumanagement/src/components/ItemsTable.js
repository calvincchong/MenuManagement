'use client';
import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slideout from '../components/Slideout';
import EditItemForm from '../components/EditItemForm';
import _ from 'lodash';
import { AiOutlineSortAscending } from 'react-icons/ai';
import style from '../styles/ItemsTable.module.css';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Menu Filter: Filter Item Search by Category or Inside Description
// filter using React Forms

const ItemsTable = ({ items }) => {
  const [showForm, setShowForm] = useState(false);
  const [tableItems, setTableItems] = useState(items);
  const [editItem, setEditItem] = useState(items[0]);

  const changeForm = (e, item) => {
    e.preventDefault();
    setEditItem(item);
    setShowForm(!showForm);
  };

  const groups = items === null ? [] : _.sortBy(items, ['category', 'order']);

  console.log(Array.isArray(groups));

  return (
    <div className="flex flex-col">
      <div className="">
        {/* <div className={showForm === true ? `${style['navbar-collapse']}` : `${style['collapsed']}` }>
          <Slideout>
            <EditItemForm item={ editItem } />
          </Slideout>
        </div> */}
        <div className="max-w-6xl	m-auto overflow-x-auto">
          <h1>Items Table</h1>
          <table className="w-full max-w-6xl text-sm text-left text-gray-500 dark:text-gray-400 py-8">
            <caption>
              Browse Menu and put in edits. Note that styling for description
              text is ignored. Items in
            </caption>
            <thead className="text-xs uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-wider">
              <tr>
                <th
                  key={`header-menuName`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Menu Name
                </th>
                <th
                  key={`header-category`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Category
                  <a
                    href="#"
                    className="inline-block"
                    onClick={e => {
                      e.preventDefault();
                      let setItems = tableItems === items ? groups : items;
                      setTableItems(setItems);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 hover:scale-110"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </th>
                <th
                  key={`header-description`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Description
                </th>
                <th
                  key={`header-price`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Price
                </th>
                <th
                  key={`header-edit-button`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Edit
                </th>
                <th
                  key={`header-order-val`}
                  className="px-4 py-3 border-slate-300 border"
                >
                  Seq
                </th>
              </tr>
            </thead>
            <tbody>
              {tableItems.map((item, idx) => {
                return (
                  <Fragment key={`fullRow-${item.id}-idx`}>
                    <tr
                      scope="row"
                      key={item._id}
                      className="px-6 py-4 text-gray-900 whitespace-nowrap bg-gray-50 hover:bg-gray-200 dark:text-white dark:bg-gray-800"
                    >
                      <td key={`tdrow-${item.id}_name`}>{item.menuName}</td>
                      <td key={`tdrow-${item.id}-category`}>{item.category}</td>
                      <td key={`tdrow-${item.id}-description`}>
                        {item.description}
                      </td>
                      <td key={`tdrow-${item.id}-price`}>
                        ${item.price.toFixed(2)}
                      </td>
                      <td key={`tdrow-${item.id}-edit-button`}>
                        <button
                          key={`button-${item.id}`}
                          className="hover:text-slate-900 border-slate-300 border-1 rounded-md bg-emerald-300 hover:bg-emerald-500  pl-2 pr-2 m-auto"
                          onClick={e => {
                            changeForm(e, item);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td key={`tdrow-${item.order}`}>{item.order}</td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* {showForm ? (
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animated={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Slideout>
                <EditItemForm item={ editItem } />
              </Slideout>
            </motion.div>
            </AnimatePresence>
            ): null
          } */}

        <AnimatePresence>
          {showForm && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* <Slideout key="slideout"> */}
              <EditItemForm key="edititemform" item={editItem} />
              {/* </Slideout> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ItemsTable;
