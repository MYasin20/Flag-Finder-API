import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  return (
    <header className="max-w-[1540px] mx-auto shadow-md px-4 md:px-20 h-20 w-full relative top-0 left-0 z-10 flex justify-between items-center">
      <h2 className="font-extrabold text-sm md:text-2xl">Where in the world?</h2>
      <button className="flex items-center gap-3 text-xs md:text-base">
        <FontAwesomeIcon icon={faMoon} />
        <p className='font-semibold'>Dark Mode</p>
      </button>
    </header>
  )
}

export default Header