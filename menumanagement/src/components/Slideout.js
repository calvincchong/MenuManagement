'use client';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/reducers/cartSlice';

const Slideout = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className='static slideout fixed z-10 top-0 right-0 w-1/3 h-screen bg-white-800 opacity-99 shadow-2xl backdrop-blur-3xl duration-200 p-4'>
      <div>
        <button className='float-right' onClick={() => dispatch(toggleCart())}>
        X
        </button>
      </div>
      <div>
      This is the slideout with the, this is supposed to be a component that I can pass in child components to render but will abstract away the slideout effects.
      </div>
      <div>Cart</div>
      {children}

    </div>
  )
}

export default Slideout;