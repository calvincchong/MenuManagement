'use client';
import { useState } from 'react';

const AddItemForm = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemChineseName, setChineseItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [price, setPrice] = useState('');
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  //TODO: abstract function that calls the function, and provides field name
  //Uses Switch Statement to update specific fields (choosing this over storing properties in an object to prevent repeat rendering
  const handleChange = (e) => {
    console.log('whats the name and val', e.target.name, e.target.value)
    const { name, value } = e.target;
    switch (name) {
      case 'itemName': {
        setItemName(value);
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
      default:
        break;
    }
  };

  //TODO: handle submission of form
  const handleSummit = (e) => {};

  return (<div className="flex-row justify-center w-8/12">
    <h1> This is the item form </h1>
    <div className="bg-slate-300 p-4">
      <form onSubmit={handleSummit}>
       <div className="flex justify-center space-x-4">
         <label>Menu Item Name</label>
         <input
            id="itemName"
            type="text"
            value={itemName}
            name="itemName"
            onChange={handleChange}
         />
       </div>
       <div className="flex justify-center space-x-4">
         <label>Item Chinese Name</label>
         <input
            id="itemChineseName"
            type="text"
            value={itemChineseName}
            name="itemChineseName"
            onChange={handleChange}
         />
       </div>
       <div className="flex justify-center space-4">
            <label>Price</label>
            <input
                id="itemName"
                type="text"
                value={price}
                name="price"
                onChange={handleChange}
            />
       </div>
       <button type="submit">Submit</button>
      </form>
    </div>
  </div>)
}

export default AddItemForm;