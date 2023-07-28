import { useState } from "react";

import Navlinks from "./Navlinks";

import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function Header() {
const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto py-4 sm:px-12 md:px-24 flex justify-between text-2xl items-center border-b-2">
      <h1 className="text-2xl lg:text-4xl font-bold">Foodie Haven</h1>
      <nav className="hidden lg:block">
        <Navlinks />
      </nav>

      <div className="lg:hidden">
        <button className="relative"
        onClick={()=> {setOpen(!open)
          console.log(open);
         }}
        >
          <FaHamburger />
        </button>
        
          
        {open && <Navlinks />}
        
        <button className="absolute top-[6vh] right-[6vh] lg:hidden text-neutral-800 text-4xl z-10" 
        onClick={()=>{
          setOpen(!open)
          console.log(open)
        }}><RxCross1 /></button>
      </div>
      <ul className="hidden lg:flex gap-8 text-neutral-500">
        <li>
          <a href="" className="hover:text-neutral-800 z-30">
            <AiOutlineShoppingCart />
          </a>
        </li>
        <li>
          <a href="" className="hover:text-neutral-800">
            <AiOutlineUser />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
