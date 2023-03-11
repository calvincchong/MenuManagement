import { FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="position:fixed flex flex-wrap justify-between space-x-4 mx-auto max-w-screen-xl max-hd-[40px] rop-shadow-sm border-blue-50 border-b-2">
     <div> Koo Koo Logo </div>
      <ul className="flex mt-2 font-medium flex-row lg:space-x-4 lg:mt-0 py-2 space-x-4">
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
      </ul>
     <div className="p-2 relative">
      <FaShoppingCart className="text-orange-400 text-3xl"/>
      <div className="z-10 absolute bottom-1 left-1 text-center text-xs text-black bg-orange-200 rounded-full min-w-[1.5rem] min-h-[1.5rem] drop-shadow-sm">
        <p className="align-text-middle p-1">12</p>
      </div>
     </div>
    </div>
  )
}

export default NavBar;