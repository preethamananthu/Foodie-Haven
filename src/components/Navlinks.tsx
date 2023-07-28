function Navlinks() {
  return (
    <div>
        <div className="
        absolute w-full h-full top-[65px] left-0 bg-slate-200 bg-opacity-[98%]
        lg:static lg:w-fit lg:bg-opacity-0
        ">
        <ul className="
            flex flex-col items-center font-semibold h-screen justify-center text-4xl
            gap-20 text-neutral-800 relative
            lg:flex-row lg:font-normal lg:h-full lg:text-neutral-500 lg:text-2xl
        ">
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