'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/EditItemForm.module.css';

const labelCSS = 'block text-gray-700 text-sm font-bold mb-2 w-100';

// TODO: HANDLE THE CASE OF REMOVING AN OPTION.
// TODO: HANDLE DYNAMIC FIELDS FOR OPTIONS

const EditItemForm = ({ item }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: item.englishName,
      chineseName: item.chineseName,
      category: item.category,
      description: item.description,
      price: item.price,
      options: item.options,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'addOptions',
    control,
  });

  const onSubmit = data => {
    console.log('hellooooo clicked onsubmit');
    console.log('this is the data', data);
    console.log(JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        Edit {item.menuName}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label className={labelCSS}>English Name</label>
              <input {...register('name')} />
            </div>
            <div className="w-full">
              <label className={labelCSS}>Chinese Name test</label>
              <input {...register('chineseName')} />
            </div>
            <div>
              <label className={labelCSS}>category</label>
              <input {...register('category')} />
            </div>
            <div>
              <label className={labelCSS}>Description</label>
              <input {...register('description')} />
            </div>
            <div>
              <label className={labelCSS}>Price</label>
              <input {...register('price')} />
            </div>
            <div>
              Options
              <div>
                {item.options.map((option, idx) => {
                  if (option === null) return;
                  return (
                    <div
                      key={`${option.name}_${idx}`}
                      className="flex justify-center"
                    >
                      <label>Option Name</label>
                      <input
                        key={`${option.name}_${idx}`}
                        defaultValue={option.name}
                        {...register(`options[${idx}].name`)}
                      />
                      <label>Price</label>
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
                  );
                })}
              </div>
            </div>
            <div></div>
            {/* <input type="submit" /> */}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItemForm;
