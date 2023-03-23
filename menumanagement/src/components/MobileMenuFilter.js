'use client';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTransition } from 'react-spring';

/**
 * @param {*} This is the hover icon and categories that will help filter the items
 * Refactor to separate list of menus later
 */
const ExpandableMenuFilter = ({ categories }) => {
  const selectedCategory = useSelector((state => state.menuCategory));
  const dispatch = useDispatch();

  return (
    <div className="">
      Filler text

    </div>
  )
}

export default ExpandableMenuFilter;
