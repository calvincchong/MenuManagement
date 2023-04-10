'use client';
import { animated } from 'react-spring';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDetails } from '../store/reducers/detailsSlice';

const PopUpModal = ({style, children}) => {
  return (
    <animated.div style={style} className='modal'>
      {children}
    </animated.div>
  )
}