/* eslint-disable react/prop-types */

const Header = ({ darkMode, setDarkMode }) => {
  const handleDarkMode = () => {
    darkMode();
  }
  return (
    <header className="dark:bg-[#2b3945] w-full h-20 relative shadow-md">
      <div className='dark:text-white max-w-[1540px] mx-auto px-4 sm:px-20 2xl:px-4 h-full relative top-0 left-0 z-10 flex justify-between items-center'>
        <h2 className="font-extrabold text-sm md:text-2xl">Where in the world?</h2>
        <button onClick={handleDarkMode} className="flex items-center gap-3 text-xs md:text-base">
          <span className={`w-5 h-5 ${!setDarkMode ? 'text-black' : 'text-white'}`}>
            {!setDarkMode ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" /></svg>
              :
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M264 480A232 232 0 0132 248c0-94 54-178.28 137.61-214.67a16 16 0 0121.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0121.06 21.06C442.28 426 358 480 264 480z" /></svg>
            }
          </span>
          <p className='font-semibold'>Dark Mode</p>
        </button>
      </div>
    </header>
  )
}

export default Header