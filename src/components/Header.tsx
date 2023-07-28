import {AiOutlineUser, AiOutlineShoppingCart} from "react-icons/Ai";
import {FaHamburger} from "react-icons/Fa";

function Header() {
  return (
    <div className="container mx-auto py-4 sm:px-12 md:px-24 flex justify-between text-2xl items-center border-b-2">
        <h1 className="text-4xl font-bold">Foodie Haven</h1>
        <nav className="">
          <ul className="hidden lg:flex gap-20 text-neutral-500">
            <li><a href="" className="hover:text-neutral-800">Home</a></li>
            <li><a href="" className="hover:text-neutral-800">Menu</a></li>
            <li><a href="" className="hover:text-neutral-800">About us</a></li>
          </ul>
        </nav>

        <div className='lg:hidden'><FaHamburger /></div>
          <ul className="hidden lg:flex gap-8 text-neutral-500">
            <li><a href="" className="hover:text-neutral-800"><AiOutlineShoppingCart/></a></li>
            <li><a href="" className="hover:text-neutral-800"><AiOutlineUser/></a></li>
          </ul>
      </div>
  )
}

export default Header;