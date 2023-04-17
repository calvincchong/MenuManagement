'use client'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from "framer-motion"

const labelCSS = "block text-gray-700 text-sm font-bold mb-2"

const EditItemForm = ({ item }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="flex flex-col bg-slate-100 px-10 py-10 h-screen z-10">
      <div className="m-auto">
        Edit {item.menuName}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className={labelCSS}>English Name</label>
              <input defaultValue={item.englishName} {...register("name")} />
            </div>
            <div>
              <label className={labelCSS}>category</label>
              <input defaultValue={item.category} {...register("category")} />
            </div>
            <div>
              <label className={labelCSS}>Description</label>
              <input defaultValue={item.description} {...register("description")} />
            </div>
            <div>
              <label className={labelCSS}>Price</label>
              <input defaultValue={item.price} {...register("price")} />
            </div>
            <div>
              Options:
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditItemForm;