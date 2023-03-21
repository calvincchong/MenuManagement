'use client';
import { useState, useEffect } from 'react';
// import { editMenu } from '../pages/api/menu';
import { categories } from '../lib/categoryFixtures';

const formFieldStyle = 'lg:max-w-md w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600';
const labelText = 'lg:min-w-[20%] text-sm font-medium text-gray-500 text-sm lg:text-base';

const AddItemForm = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemChineseName, setChineseItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [price, setPrice] = useState('');
  const [fields, setFields] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  //TODO: abstract function that calls the function, and provides field name
  //Uses Switch Statement to update specific fields (choosing this over storing properties in an object to prevent repeat rendering
  const handleChange = (e) => {
    // console.log('whats the name and val', e.target.name, e.target.value)
    const { name, value } = e.target;
    switch (name) {
      case 'itemName': {
        setItemName(value);
        break;
      }
      case 'itemChineseName': {
        setChineseItemName(value);
        break;
      }
      case 'itemDescription': {
        setItemDescription(value);
        break;
      }
      case 'price': {
        setPrice(value);
        break;
      }
      case 'itemCategory': {
        setItemCategory(value);
        break;
      }
      default:
        break;
    }
  };

  // Validate Form for: pricing (needs to be a valid price), itemCategory (needs to be a valid category)
    // item name should not already exist. If it does, throw an error. Calls API to check if item name already exists in DB 10 seconds after last modification of the item name section.
  const validateForm = (e) => {

  }

  // Posts entry to database without validation of whether a similar entry already exists
  const handleSummit = async (e) => {
    e.preventDefault();

    //TODO: validate form and throw error if any of the fields are not filled out or doesn't match regex rules

    let res = await fetch('/api/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: itemName,
        chineseName: itemChineseName,
        description: itemDescription,
        category: itemCategory,
        price: price
      })
    })

    // TODO: return success or error message back to the front end by setting the form result as a state
  };

  return (
  <div className="flex-row justify-center w-6/12 max-w-lg drop-shadow-sm backdrop-blur-sm">
    <div className="border-2 border-orange-100 p-4">
      <form onSubmit={handleSummit}>
       <div className="flex justify-center space-x-4 m-2">
         <label className={labelText}>Menu Item</label>
         <input className={formFieldStyle}
            id="itemName"
            type="text"
            value={itemName}
            name="itemName"
            onChange={handleChange}
         />
       </div>
       <div className="flex justify-center space-x-4 m-2">
         <label className={labelText}>Item Chinese Name</label>
         <input className={formFieldStyle}
            id="itemChineseName"
            type="text"
            value={itemChineseName}
            name="itemChineseName"
            onChange={handleChange}
         />
       </div>
       <div className="flex justify-center space-x-4 m-2">
          <label className={labelText}>Price</label>
          <input className={formFieldStyle}
              id="itemName"
              type="text"
              value={price}
              name="price"
              onChange={handleChange}
          />
       </div>
       <div className="flex justify-center space-x-4 m-2">
          <label for="countries"
            className={labelText}
          >
            Category
          </label>
          <select required className={`${formFieldStyle} bg-gray-50`}
              id="itemCategory"
              value={itemCategory}
              name="itemCategory"
              onChange={handleChange}
          >
              <option value={null} disabled selected>Select Category</option>
              {
                categories.map((category, i) => {
                  return <option value={category} key={`${category}`}>{category}</option>
                })
              }
          </select>
       </div>
       <div className="flex justify-center space-x-4 m-2">
        <label className={labelText}>Description</label>
        <textarea className={formFieldStyle}
          id="itemDescription"
          type="text"
          value={itemDescription}
          name="itemDescription"
          onChange={handleChange}
        >
        </textarea>
       </div>
       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full">
        Submit
       </button>
      </form>
    </div>
  </div>)
}

export default AddItemForm;