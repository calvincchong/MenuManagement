'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/reducers/cartSlice';

const Slideout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className='static slideout fixed z-10 top-0 right-0 w-1/3 h-screen bg-white-800 opacity-99 shadow-2xl backdrop-blur-3xl p-4'>
      <div>
        <button
          className='absolute float-right z-50 right-2 top-2 text-lg bold'
          onClick={() => {dispatch(toggleCart())}}
        >
        X
        </button>
      </div>
      {children}
    </div>
  )
}

export default Slideout;