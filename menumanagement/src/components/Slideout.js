'use client';

const Slideout = ({ children }) => {
  return (
    <div className='slideout fixed z-200 top-0 right-0 w-1/3 h-screen bg-white-800 opacity-95 shadow-2xl backdrop-blur-3xl duration-200 p-4'>
      This is the slideout with the, this is supposed to be a component that I can pass in child components to render but will abstract away the slideout effects.
      {children}
    </div>
  )
}

export default Slideout;