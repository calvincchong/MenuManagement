'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/EditItemForm.module.css';

// Icons
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

// Components
import Button from './Reusables/Button';

// Utility Functions
import { cleanEditFormData } from '../lib/controllers/cleanEditFormData';
import { editMenuItem } from '../lib/api';

const labelCSS = 'block text-gray-700 text-sm font-bold mt-2 w-100';

// TODO: HANDLE THE CASE OF REMOVING AN OPTION.
// TODO: HANDLE DYNAMIC FIELDS FOR OPTIONS

const EditItemForm = ({ item, close }) => {
  const [isUpdateSuccess, setIsUpdateSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      id: item.id,
      name: item.englishName,
      chineseName: item.chineseName,
      category: item.category,
      description: item.description,
      price: item.price,
      options: item.options,
      order: item.order,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'additionalOptions',
    control,
  });

  // cleans data and Submits Data to api lib that will then make put request to endpoint to update Database.
  // TODO: HANDLE REMOVE OPTIONS ->
  // TODO: HANDLE GET OPTIONS FROM DATABASE ->
  const onSubmit = async data => {
    console.log('hellooooo clicked onsubmit', item.id);
    console.log('what is the price after changing', data.price);
    let cleanedData = JSON.stringify(cleanEditFormData(data, item.id));
    let res = await editMenuItem(cleanedData);
    console.log('this is the result of the put call', res);
    if (res.success === true) {
      setIsUpdateSuccess(true);
    } else {
      console.error('error updating item', res);
      setErrorMessage(`${res.status} --- ${res.statusText}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* <div className="absolute right-0 top-10"> */}
        <button className={styles['close-button']} onClick={close}>
          x
        </button>
        {/* </div> */}
        <p className={styles['section-title']}>Edit {item.menuName}</p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['text-fields']}>
              <label className={labelCSS}>English Name</label>
              <input className={styles['input-box']} {...register('name')} />
            </div>
            <div className={styles['text-fields']}>
              <label className={labelCSS}>Chinese Name test</label>
              <input
                className={styles['input-box']}
                {...register('chineseName')}
              />
            </div>
            <div className={styles['text-fields']}>
              <label className={labelCSS}>Category</label>
              <input
                className={styles['input-box']}
                {...register('category')}
              />
            </div>
            <div className={styles['text-fields']}>
              <label className={labelCSS}>Description</label>
              <textarea
                className={styles['input-box']}
                {...register('description')}
              />
            </div>
            <div className={styles['two-col-fields']}>
              <div className={styles['text-fields']}>
                <label className={labelCSS}>Price</label>
                <input
                  className={styles['input-box']}
                  {...register('price', { valueAsNumber: true })}
                />
              </div>
              <div className={styles['text-fields']}>
                <label className={labelCSS}>Order</label>
                <input className={styles['input-box']} {...register('order')} />
              </div>
            </div>

            <div>
              <h2 className={styles['section-title']}>Existing Options</h2>
              <div>
                {item.options.map((option, idx) => {
                  if (option === null) return;
                  return (
                    <div
                      key={`${option.name}_${idx}`}
                      className={styles['two-col-fields']}
                    >
                      <div>
                        <label className={styles['input-label']}>
                          Option Name
                        </label>
                        <input
                          key={`${option.name}_${idx}`}
                          defaultValue={option.name}
                          {...register(`options[${idx}].name`)}
                        />
                      </div>
                      <div>
                        <label className={styles['input-label']}>Price</label>
                        <input
                          key={`${option.price}_${idx}`}
                          defaultValue={option.price}
                          {...register(`options[${idx}].price`, {
                            valueAsNumber: true,
                          })}
                          // {...register(`${option.name}.price`)}

                          // {register()}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`additionalOptions justify-between`}>
              <h3 className={styles['section-title']}>Add More Options</h3>
              {fields.map((field, idx) => {
                return (
                  <div className="flex justify-center pb-2">
                    <label className={styles['input-label']}>Option Name</label>
                    <input
                      key={field.id}
                      {...register(`additionalOptions.${idx}.name`)}
                      id={`additionalOptions.${idx}.name`}
                    />
                    <label className={styles['input-label']}>Price</label>
                    <input
                      className={styles['small-text-input']}
                      {...register(`additionalOptions.${idx}.price`)}
                      id={`additionalOptions.${idx}.price`}
                    />
                    <Button
                      onClick={() => remove(idx)}
                      className={'text-sm'}
                      type="button"
                      icon={<FaMinus className={styles.inlineIcon} />}
                    ></Button>
                  </div>
                );
              })}
              <Button
                onClick={() => append({ name: '', amount: '' })}
                className={'text-sm m-auto w-3/4 block'}
                type={'button'}
                icon={<FaPlus className={styles['inline-icon']} />}
              ></Button>
              <p className="text-xs">
                click plus button to add more options. Be careful to make sure
                name is properly written. There is currently minimal validation.
              </p>
            </div>
            {/* <input type="submit" /> */}
            <input
              className="w-full bg-emerald-300 hover:bg-emerald-500 rounded mt-1 py-1"
              type="submit"
            />
            {isUpdateSuccess && (
              <p className="bg-green">The Item was successfully updated.</p>
            )}
            {errorMessage && (
              <p className="bg-red-100">
                {errorMessage} There was an error in the attempt to update the
                item. The Item was not updated.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemForm;
