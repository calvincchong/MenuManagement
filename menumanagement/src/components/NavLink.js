const NavLinks = () => {
  return (
    <ul className="flex mt-2 font-thin flex-row lg:font-medium lg:space-x-4 lg:mt-0 py-2 space-x-4">
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/menu'>Menu</Link>
        </li>
        <li>About</li>
      </ul>
  )
}

export default NavLinks;