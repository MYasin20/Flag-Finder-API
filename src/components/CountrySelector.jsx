/* eslint-disable react/prop-types */

const CountrySelector = ({ search, region, setDarkMode }) => {

  const handleNewSearch = (event) => {
    const value = event.target.value.toLowerCase();
    search(value);
  }
  const handleFilterRegion = (event) => {
    let value = event.target.value.toLowerCase();
    if (value === 'america') {
      value = 'americas';
    }
    region(value);
  }

  return (
    <div className="md:flex md:w-full justify-between max-w-[1540px] mx-auto">
      <div className='flex items-center mb-10 md:mb-0 md:w-[480px]'>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${setDarkMode ? 'fill-white' : ''} w-5 ml-5 absolute`} viewBox="0 0 512 512"><path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" /></svg>
        <input
          className={`${setDarkMode ? 'dark:bg-[#2b3945] dark:text-[#858585]' : ''} rounded-md py-4 pl-16 shadow-md w-full text-sm md:text-base mr-3`}
          onInput={handleNewSearch}
          type="text"
          id="searchFlag"
          placeholder="Search a country...."
        />
      </div>

      <select onChange={handleFilterRegion}
        className={`${setDarkMode ? 'dark:bg-[#2b3945] dark:text-[#fafafa]' : ''} bg-white rounded-md text-sm md:text-base p-4 min-w-[200px] outline-none shadow-md`}
        name="region">
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  )
}

export default CountrySelector