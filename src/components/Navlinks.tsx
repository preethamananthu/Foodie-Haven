import { useState } from "react"

import { RxCross1 } from "react-icons/rx";

function Navlinks() {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <div className="
        absolute w-full h-full top-0 left-0 bg-slate-200 bg-opacity-[98%]
        lg:static lg:w-fit lg:bg-opacity-0
        ">
        <ul className="
            flex flex-col items-center font-semibold h-screen justify-center text-4xl
            gap-20 text-neutral-800 relative
            lg:flex-row lg:font-normal lg:h-full lg:text-neutral-500 lg:text-2xl
        ">


        <button className="absolute top-[6vh] right-[6vh] lg:hidden text-neutral-800 text-4xl z-10" 
        onClick={()=>{
          setOpen(!open)
          console.log(open)
        }}><RxCross1 /></button>
        

          <li>
            <a href="" className="hover:text-neutral-800">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-neutral-800">
              Menu
            </a>
          </li>
          <li>
            <a href="" className="hover:text-neutral-800">
              About us
            </a>
          </li>
        </ul>
        </div>
       
    </div>
  )
}

export default Navlinks