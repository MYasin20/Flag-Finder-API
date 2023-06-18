/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const CountrySelector = ({ search, region }) => {

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
        <FontAwesomeIcon className='absolute px-5' icon={faMagnifyingGlass} />
        <input
          className="rounded-md py-4 pl-16 shadow-md w-full text-sm md:text-base mr-3"
          onInput={handleNewSearch}
          type="text"
          id="searchFlag"
          placeholder="Search a country...."
        />
      </div>

      <select onChange={handleFilterRegion}
        className="rounded-md text-sm md:text-base p-4 min-w-[200px] outline-none shadow-md"
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