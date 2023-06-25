import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-solid-svg-icons"


const Header = () => {
  return (
    <header className="dark:bg-[#2b3945] w-full h-20 relative shadow-md">
      <div className='dark:text-white max-w-[1540px] mx-auto px-4 sm:px-20 2xl:px-4 h-full relative top-0 left-0 z-10 flex justify-between items-center'>
        <h2 className="font-extrabold text-sm md:text-2xl">Where in the world?</h2>
        <button className="flex items-center gap-3 text-xs md:text-base">
          <FontAwesomeIcon icon={faMoon} />
          <p className='font-semibold'>Dark Mode</p>
        </button>
      </div>
    </header>
  )
}

export default Header